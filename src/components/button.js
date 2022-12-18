import * as React from "react";
import Button from "@mui/material/Button";

export default function MyApp({ text, handleClick }) {
	return (
		<div>
			<Button variant="contained" onClick={handleClick}>
				{text}
			</Button>
		</div>
	);
}
