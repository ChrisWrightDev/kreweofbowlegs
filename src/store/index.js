import { reactive, readonly, watch, ref } from 'vue';

export class Store {
    constructor(storeName) {
        this.storeName = storeName;
        let data = this.data();
        this.state = reactive(data);
    }
    getState() {
        return readonly(this.state);
    }
}
export class PersistentStore extends Store {
    constructor(storeName) {
        super(storeName);
        this.storeName = storeName;
        this.isInitialized = ref(false);
    }
    async init() {
        if (this.isInitialized) {
            let stateFromIndexedDB = localStorage.getItem(this.storeName); // load from localstorage or a database or a json
            if (stateFromIndexedDB) {
                Object.assign(this.state, JSON.parse(stateFromIndexedDB));
            }
            watch(() => this.state, (val) => localStorage.setItem(this.storeName, JSON.stringify(val)), { deep: true }); // can sae back to db/local/or file
            this.isInitialized.value = true;
        }
    }
    getIsInitialized() {
        return this.isInitialized;
    }
}