import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";

type DispatchFunc = () => AppDispatch;

export const useCartDispatch: DispatchFunc = useDispatch;
