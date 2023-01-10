import {atom} from 'recoil';

export const bookmarkState = atom({
    key: 'bookmarkState',
    default: {
        jobIdx: 0,
        title: '',
        region: '',
        jobImgUrl: '',
        company: '',
        money: '',
        likeOrNot: false,

    },
});