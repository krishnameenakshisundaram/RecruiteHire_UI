import React,{ useEffect, useState } from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";

import LoginForm, { Props } from "../LoginForm";

function AsyncMessage() {
    const [message, setMessage] = useState('');
    useEffect(() => {
      const timer = setTimeout(() => {
        setMessage('Hello, World!');
      }, 500);
      return () => clearTimeout(timer);
    }, []);
    return <p>{message}</p>;
  }

describe("<LoginForm />", () => {
  test("should display a blank login form, with remember me checked by default", async () => {
    // ???
  });
});