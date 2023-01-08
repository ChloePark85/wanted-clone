import {atom} from 'recoil';

export const userState = atom({
    key: 'userState',
    default: {
        nickName: '',
        email: '',
        phoneNum: '',
        pwd: '',
        subGroup: '',
        workYear: '',
        interestIdx: 0,
        profileImg: '',
        isLogin: false,
    },
});