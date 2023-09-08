import {userModule} from "./userModule";
import {createStore} from "vuex";

export default createStore({
    modules:{user:userModule}
});
