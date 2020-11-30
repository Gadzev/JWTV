import {types, getEnv} from 'mobx-state-tree';
import {TVShowStore} from './TVShowStore';

export const RootStore = types
  .model('RootStore', {
    showStore: types.optional(TVShowStore, {
      shows: {},
    }),
  })
  .views((self) => ({
    get fetch() {
      return getEnv(self).fetch;
    },
    get shows() {
      return self.showStore.allShows;
    },
    get showSelected() {
      return self.showStore.showIsSelected;
    },
    get getSelectedShow() {
      return self.showStore.selectedShow;
    },
  }))
  .actions((self) => ({
    afterCreate() {
      self.showStore.loadShows();
    },
  }));
