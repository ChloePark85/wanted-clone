import {atom} from 'recoil';

export const userState = atom({
    key: 'userState',
    default: {
        userIdx: 0,
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