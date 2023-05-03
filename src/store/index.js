import { configureStore } from "@reduxjs/toolkit";

import trainerName from './slices/trinerName.slice';
import showName from './slices/showName.slice'
import showCategory from './slices/searchCategory.slice'
import count from './slices/counter.slice'

export default configureStore({
    reducer: {
        trainerName,
        showName,
        showCategory,
        count
    }
}
)