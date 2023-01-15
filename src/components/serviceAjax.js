import {
  default as oeuvreFavoriteExport,
  default as uidUserExport,
} from "../views/AdminView.vue";

export const getAnniversaireDatas = () => {
     let rq = [oeuvreFavoriteExport, uidUserExport];
     return fetch(rq)
    .then(response => {
        return response.json() // en json
    }).catch(error => {throw error })
}
