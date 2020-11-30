import {values} from 'mobx';
import {flow, getParent, types} from 'mobx-state-tree';

const TVShow = types
  .model('TVShow', {
    id: types.identifier,
    name: types.string,
    description: types.string,
    img: types.string,
    selected: false,
  })
  .actions((self) => ({
    toggleSelected() {
      self.selected = !self.selected;
    },
  }));

export const TVShowStore = types
  .model({
    shows: types.map(TVShow),
  })
  .views((self) => ({
    get store() {
      return getParent(self);
    },
    get allShows() {
      return values(self.shows);
    },
    get showIsSelected() {
      return values(self.shows).filter((show) => show.selected).length > 0;
    },
    get selectedShow() {
      return values(self.shows).filter((show) => show.selected)[0];
    },
  }))
  .actions((self) => {
    function updateShows(data) {
      values(self.shows).map((show) => (show.selected = false));
      data.map((show) => {
        self.shows.put(show);
      });
    }

    const loadShows = flow(function* loadShows() {
      try {
        const shows = yield self.store.fetch(
          'http://localhost:8081/shows.json',
        );
        updateShows(shows);
      } catch (err) {
        console.log('Failed to fetch shows. Err: ', err);
      }
    });

    return {
      updateShows,
      loadShows,
    };
  });
