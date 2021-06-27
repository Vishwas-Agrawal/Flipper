import createDataContext from "./CreateDataContext";
import Api from "../Api/axios";

const AuthReducer = (state, action) => {
	switch (action.type) {
		case "signup":
			return { ...state, username: action.payload.username, email: action.payload.email };
		case "signout":
			return { errorMessage: '', username: '', email: '' }
		case "update":
			return { ...state, level: action.payload.level };
		default:
			return state;
	}
};

const signin = (dispatch) => {
	return async ({ email, password, history }) => {
		try {
			console.log("abc");
			const response = await Api.post("/signin", { email, password });
			console.log("kunal");
			await localStorage.setItem("token", response.data.token);
			await localStorage.setItem("username", response.data.username);
			await localStorage.setItem("level", response.data.level);
			await localStorage.setItem("email", response.data.email);
			dispatch({ type: "signup", payload: response.data });
			history.push("/home");
		} catch (err) {
			dispatch({ type: "add_error", payload: "Something went wrong with Login In" });
		}
	};
};

const Osignin = (dispatch) => {
	return async ({ token, email, username, history }) => {
		try {
			const response = await Api.post("/Osignin", { email });
			await localStorage.setItem("token", token);
			await localStorage.setItem("username", username);
			await localStorage.setItem("email", email);
			dispatch({ type: "signup", payload: { token, level: response.data.level, username, email } });
			history.push("/home");
		} catch (err) {
			dispatch({ type: "add_error", payload: "Something went wrong with Login In" });
		}
	};
};

const signup = (dispatch) => {
	return async ({ email, password, username, history, cpassword }) => {
		if (password !== cpassword) {
			alert("Passwords don't Match");
			return
		}
		var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
		if (!pattern.test(email)) {
			alert("Email is incorrect");
			return
		}
		if (password.length < 8) {
			alert("Password is too short");
			return
		}
		try {
			const response = await Api.post("/register", { username, email, password });
			console.log("124");
			await localStorage.setItem("username", response.data.username);
			await localStorage.setItem("email", response.data.email);
			dispatch({ type: "signup", payload: { username, email } });
			history.push('/login');
		} catch (err) {
			alert("User already registered");
		}
	}
};

const Osignup = (dispatch) => {
	return async ({ email, username, token, history }) => {
		try {
			await Api.post("/Osignup", { email, username, password: token });
			await localStorage.setItem("token", token);
			await localStorage.setItem("username", username);
			await localStorage.setItem("email", email);
			dispatch({ type: "signup", payload: { token, username, email } });
			history.push("/home");
		} catch (err) {
			alert("Invalid email or passsword or Use you are aldready registered");
		}
	};
};

const update = (dispatch) => {
	return async ({ email, level }) => {
		try {
			await Api.post("/update", { email, level });
			dispatch({ type: "update", payload: { level } });
			await localStorage.setItem("level", level);
		} catch (err) {
			dispatch({ type: "add_error", payload: "Something Went Wrong" });
		}
	}
}

const tryLocalLogin = (dispatch) => {
	return async () => {
		const token = await localStorage.getItem("token");
		const username = await localStorage.getItem("username");
		const level = await localStorage.getItem("level");
		const email = await localStorage.getItem("email");
		if (token) {
			dispatch({ type: "signup", payload: { token, username, level, email } });
		}
	};
}

const signout = (dispatch) => {
	return async (history) => {
		await localStorage.clear();
		dispatch({ type: "signout" });
		history.push("/");
	}
}

export const { Context, Provider } = createDataContext(AuthReducer, { signup, signin, update, signout, tryLocalLogin, Osignup, Osignin }, { token: null, username: '', email: '' });
