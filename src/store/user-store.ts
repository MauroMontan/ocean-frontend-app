import { defineStore } from "pinia";
import { Auth, User } from "../interfaces/user";
import { useUi } from "./ui-state";

export const useUser = defineStore("user store", {
    state: () => ({
        rankUsers: [] as Array<User>,
        access_token: {}
    }),
    getters: {
        rankedUsers: (state) => state.rankUsers,
        isAuthenticated: (_) => {
            return !localStorage.getItem("token") ? false : true;
        }
    },
    actions: {
        async getUsersRank() {

            try {

                const data = await fetch("http://localhost:3030/users/amount", {
                    "method": "GET",
                    "headers": {}
                });

                this.rankUsers = await data.json();
            } catch (error) {
                this.rankUsers = [
                    {
                        "email": "email9",
                        "amount": 40.03,
                        "name": "holaaaa",
                        "prizes": 2,
                        "username": "helado9"
                    },
                    {
                        "email": "email5",
                        "amount": 6.23,
                        "name": "mauro5",
                        "prizes": 2,
                        "username": "helado5"
                    },
                    {
                        "email": "email2",
                        "amount": 4.23,
                        "name": "mauro2",
                        "prizes": 3,
                        "username": "helado2"
                    },
                    {
                        "email": "email",
                        "amount": 4.23,
                        "name": "mauro",
                        "prizes": 3,
                        "username": "helado"
                    },
                    {
                        "email": "email4",
                        "amount": 1.23,
                        "name": "mauro4",
                        "prizes": 2,
                        "username": "helado4"
                    },
                    {
                        "email": "email3",
                        "amount": 1.23,
                        "name": "mauro3",
                        "prizes": 2,
                        "username": "helado3"
                    },
                    {
                        "email": "email8",
                        "amount": 1.03,
                        "name": "mauro8",
                        "prizes": 2,
                        "username": "helado8"
                    },
                    {
                        "email": "email6",
                        "amount": 1.03,
                        "name": "mauro6",
                        "prizes": 2,
                        "username": "helado6"
                    },
                ]
            }
        },

        async signin(user: Auth) {

            const uiStore = useUi();
            try {
                const data = await fetch("http://localhost:3030/auth/signin", {
                    "method": "POST",
                    "headers": {
                        "Content-Type": "application/json"
                    },
                    "body": JSON.stringify(user),
                });
                const token = await data.json();
                this.access_token = token;
                localStorage.setItem("token", JSON.stringify(token));
                uiStore.toggleLoginModal();
                uiStore.isLoggedIn = true;
            }
            catch (error) {
                uiStore.authError = true;
            }
        },

        signout() {
            const uiStore = useUi();
            localStorage.removeItem("token");
            uiStore.isLoggedIn = false;
        },
        async register(user: Auth) {
            const data = await fetch("http://localhost:3030/auth/signup", {
                "method": "POST",
                "headers": {
                    "Content-Type": "application/json"
                },
                "body": JSON.stringify({
                    "email": user.email,
                    "name": user.name,
                    "username": user.username,
                    "phone_number": user.phone_number,
                    "adress": user.adress,
                    "password": user.password
                })
            });

            const uiStore = useUi();
            uiStore.toggleRegisterModal();
        }

    }
}); 
