'use client';

import { passportInstance } from "@/passport";
import { useState, useEffect } from "react";

export default function Callback() {
    useEffect(() => {
      passportInstance.loginCallback();
    }, []);

    return <>Loading...</>
    
}