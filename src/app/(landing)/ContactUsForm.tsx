"use client";

import { useReducer } from "react";

type TActions = {
    type: "TYPE_NAME" | "TYPE_EMAIL" | "TYPE_MESSAGE";
    payload: string;
};
type TState = { name: string; email: string; message: string };

const reducer = (state: TState, action: TActions) => {
    switch (action.type) {
        case "TYPE_NAME":
            return { ...state, name: action.payload };
        case "TYPE_EMAIL":
            return { ...state, email: action.payload };
        case "TYPE_MESSAGE":
            return { ...state, message: action.payload };
        default:
            return state;
    }
};

const initialState: TState = { name: "", email: "", message: " " };

export default function ContactUsForm() {
    const [formState, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="mt-[3rem] w-full max-w-[500px] lg:max-w-[650px]">
            {/* form */}
            <div className="flex flex-col space-y-3">
                <div className="flex items-center justify-center rounded-2xl bg-neutral-100 px-6 py-3 lg:py-6">
                    <input
                        className="w-full bg-transparent outline-none placeholder:text-sm"
                        type="text"
                        placeholder="Name"
                        onChange={(e) => {
                            dispatch({ type: "TYPE_NAME", payload: e.target.value });
                        }}
                    />
                </div>
                <div className="flex items-center justify-center rounded-2xl bg-neutral-100 px-6 py-3 lg:py-6">
                    <input
                        className="w-full bg-transparent outline-none placeholder:text-sm"
                        type="text"
                        placeholder="Email"
                        onChange={(e) => {
                            dispatch({ type: "TYPE_EMAIL", payload: e.target.value });
                        }}
                    />
                </div>
                <div className="flex items-center justify-center rounded-2xl bg-neutral-100 px-6 py-3 lg:py-6">
                    <textarea
                        className="min-h-[100px] w-full resize-none bg-transparent outline-none placeholder:text-sm"
                        placeholder="Message"
                        onChange={(e) => {
                            dispatch({ type: "TYPE_EMAIL", payload: e.target.value });
                        }}
                    />
                </div>
                <button
                    className="min-h-[2.5rem] rounded-full bg-neutral-400 px-4"
                    onClick={() => console.log(formState)}
                >
                    <span className="font-medium text-white">Kirim</span>
                </button>
            </div>
        </div>
    );
}
