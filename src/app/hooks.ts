// src/app/hooks.ts

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from './store';

export const useAppDispatch = () => useDispatch<AppDispatch>();

// useSelector is actuall a function: `useSelector()`, but we are
// aliasing it and adding types
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
