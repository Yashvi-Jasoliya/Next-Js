"use client";

import { useFormStatus } from "react-dom";


/* useFormStatus() =>  is a React hook used to get the status of a form submission */

export default function MealsFormSubmit() {
	const { pending } = useFormStatus();

	return (
		<button disabled={pending}>
			{pending ? "Submitting..." : "Share Meal"}
		</button>
	);
}
