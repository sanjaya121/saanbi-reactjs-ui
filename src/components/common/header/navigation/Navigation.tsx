const Navigation = () => {
	return (
		<div className="d-flex align-items-center row">
			<div className="col-lg-2">
				<div className="logo-content d-flex align-items-center">
					<img src="images/logo/logo.png" height="80" />
					 <div className="h5 mx-3">Ghongi</div>
				</div>
			</div>
			<div className="col-lg-6">
				<div className="navigation mx-5">
					<nav className="navbar navbar-expand-lg">
						<div className="container-fluid">
						
							<div
								className="collapse navbar-collapse"
								id="navbarSupportedContent"
							>
								<ul className="navbar-nav me-auto mb-2 mb-lg-0">
									<li className="nav-item mx-3">
										<a className="nav-link active" aria-current="page" href="#">
											Home
										</a>
									</li>
									<li className="nav-item mx-3">
										<a className="nav-link text-4xl" href="#">
											Things To Do
										</a>
									</li>
									<li className="nav-item mx-3">
										<a className="nav-link" href="#">
											Hotels
										</a>
									</li>
									<li className="nav-item mx-3">
										<a className="nav-link" href="#">
											Restaurants
										</a>
									</li>
								</ul>
							</div>
						</div>
					</nav>
				</div>
			</div>
			<div className="col-lg-2">
				<div className="logo-content d-flex align-items-center">
					Account Information
				</div>
			</div>
		</div>
	);
};

export default Navigation;
