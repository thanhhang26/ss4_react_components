import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Alert extends React.Component {
	render() {
		return (
			<>
				<div className="alert alert-warning" role="alert">
					Cảnh báo! Tài nguyên bạn vừa truy cập không tồn tại.
				</div>
			</>
		);
	}
}
export default Alert;
