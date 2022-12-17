import React from 'react';
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import {UserType} from "../redux/users-reducer";


type UsersNewPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: UserType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void

}

const Users = (props: UsersNewPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>

            <div className={styles.pageNumContainer}>
                {pages.map(p => {
                    return <span onClick={() => props.onPageChanged(p)}
                                 className={styles.pageNum + ` ${props.currentPage === p && styles.selectedPage}`}>{p}</span>
                })}
            </div>

            {/*<button onClick={this.getUsers}>Get Users</button>*/}
            {
                props.users.map(u => <div key={u.id}>

                    <span>
                        <div>
                            <img src={!u.photoURL ? userPhoto : u.photoURL/*u.photoURL*/} className={styles.userPhoto}
                                 alt={'user-avatar'}/>
                        </div>
                        <div>
                            {u.followed
                                ?
                                <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button>
                                :
                                <button onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
};

export default Users;