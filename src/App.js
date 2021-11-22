import './App.css';

function App() {
	return (
    <div className="App">
			<div className="container-fluid p-0">
				<div className="m-0 row">
					<div className="col-12 p-0 text-center">
						<h1 className="main-heading">
							This is how we rebase.
						</h1>
					</div>
					<div className="col-12 p-0 text-left">
						<p className="xlg-paragraph lg-margin lg-padding">
							Step 1: Make your multiple commits.
						</p>
						<p className="xlg-paragraph lg-margin lg-padding">
							Step 2: $git rebase -i HEAD~&lt;number of commits&gt;.
						</p>
						<p className="xlg-paragraph lg-margin lg-padding">
							Step 3: Squash desired commits (only do your non-public commits).
						</p>
						<p className="xlg-paragraph lg-margin lg-padding">
							Step 4: Push up changes.
						</p>

						<h2 className="mt-5 sub-heading text-center">
							Really funky way to see git log
						</h2>
						<p className="xlg-paragraph lg-margin lg-padding">
							$git log --pretty=format:'%Cred%h%Creset -%C(blue)%d%Creset %s %Cgreen(%cr)%Creset' --abbrev-commit --date=relative
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
