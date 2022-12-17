import React from "react";
import {ActionsTypes} from "./store";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

export type LocationType = {
    city: string
    country: string
}

export type UserType = {
    id: number
    photoURL: string
    followed: boolean
    name: string
    // fullName: string
    status: string
    location: LocationType
}

export type InitialStateType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

let initialState: InitialStateType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
}

export const usersReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {

    switch (action.type) {
        case FOLLOW :
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {

                        return {...u, followed: true}
                    }
                    return u;
                })
            };

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {

                        return {...u, followed: false}
                    }
                    return u;
                })
            };

        case SET_USERS:
            return {
                ...state,
                users: [...action.users] //users: [...state.users, ...action.users]
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.count
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };

        default:
            return state
    }

}

export const follow = (userId: number) => {
    return {
        type: FOLLOW,
        userId: userId
    } as const
}
export const unfollow = (userId: number) => {
    return {
        type: UNFOLLOW,
        userId: userId
    } as const
}
export const setUsers = (users: UserType[]) => {
    return {
        type: SET_USERS,
        users: users
    } as const
}

export const setCurrentPage = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    } as const
}
export const setUsersTotalCount = (totalUsersCount: number) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        count: totalUsersCount
    } as const
}
export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    } as const
}


//=============================== как было до избавления от AC в названиях экшн криэйторов =======================================
//
// export const followAC = (userId: number) => {
//     return {
//         type: FOLLOW,
//         userId: userId
//     } as const
// }
// export const unfollowAC = (userId: number) => {
//     return {
//         type: UNFOLLOW,
//         userId: userId
//     } as const
// }
// export const setUsersAC = (users: UserType[]) => {
//     return {
//         type: SET_USERS,
//         users: users
//     } as const
// }
//
// export const setCurrentPageAC = (currentPage: number) => {
//     return {
//         type: SET_CURRENT_PAGE,
//         currentPage
//     } as const
// }
// export const setUsersTotalCountAC = (totalUsersCount: number) => {
//     return {
//         type: SET_TOTAL_USERS_COUNT,
//         count: totalUsersCount
//     } as const
// }
// export const toggleIsFetchingAC = (isFetching: boolean) => {
//     return {
//         type: TOGGLE_IS_FETCHING,
//         isFetching
//     } as const
// }