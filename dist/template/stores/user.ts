import { acceptHMRUpdate, defineStore } from 'pinia';

export const useUserStore = defineStore('userStore', {
    state: () => ({
        user: {
            firstName: 'John',
            lastName: 'Doe'
        }
    })
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}
