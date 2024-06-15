import './App.css';
import { Header } from "./components/Header";
import { Bio } from "./components/Bio";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";

function App() {
  return (
    <>
	<header id="header_container" className="col-md-12">
		<div id="header">
			<div className="circleBase header_circle" >	
				<image id="profileImage" src="%PUBLIC_URL%/profileImageDeskTop.png"/>
			</div>
			<div className="name">
				[ J. Nick Baughan ]
			</div>
		</div>
		
		<div id="contact">
			<div className="row" >
					<div className="col-xs-3">
						<div className="innerAnchor">
							<a  target="_email" href="mailto:JNickBaughan@Gmail.com?subject=Inquiry from Your site">
								<i className="fa fa-envelope-o fa-2x"></i>
							</a>
						</div>
					</div>
					<div className="col-xs-3">
						<div className="innerAnchor">
							<a href="https://www.linkedin.com/profile/public-profile-settings?trk=prof-edit-edit-public_profile" target="_blank" >
								<i className="fa fa-linkedin fa-2x"></i>
							</a>
						</div>
					</div>
					<div className="col-xs-3">
						<div className="innerAnchor">
							<a className="innerAnchor" href="https://www.facebook.com/nick.baughan.3" target="_blank" >
								<i className="fa fa-facebook-official fa-2x"></i>
							</a>
						</div>
					</div>
					<div className="col-xs-3">
						<div className="innerAnchor">
							<a className="innerAnchor" href="https://plus.google.com/106092898689353408893/posts" target="_blank" >
								<i className="fa fa-google-plus fa-2x"></i>
							</a>
						</div>
					</div>
			</div>
		</div>
	</header>

	<div id="contentWrapper">
		<div id="resumeWrapper" className="content">
			<div id="minorContent">
				<ul className="nav nav-pills nav-stacked"> 
					<li id="bio" role="presentation" className="active"><a href="#">Bio</a></li>
					<li id="skills" role="presentation" class><a href="#">Skill Set</a></li>
					<li id="examples" role="presentation" class><a href="#">Portfolio</a></li>
					<li id="experience" role="presentation" class><a href="#">Experience</a></li>
					<li id="education" role="presentation" class><a href="#">Education</a></li>
				</ul>
			</div>
			<div id="mainContentWrapper">
				<div id="mainContent">
					<div className="top_fade"></div>
					<div id="scroll">
						
						<div id="bioSection"></div>
						
						<span className="contentTitle">Skill Set</span>
						
						<div id="content_skills" className="bs-callout bs-callout-default sectionStart sectionEnd container shadowContainer">
							<div className="row">
								<div className="col-md-6">
								
									<i className="fa fa-code "></i><h4>Languages, Libraries, Scripts, & Markups-</h4>
									<b>Deep knowledge</b>
									{/* </br> */}
									Javascript, HTML, React/Redux
									{/* </br> */}
									<b>Broad knowledge</b>
									{/* </br> */}
									C#, Java, Asp.net MVC, Transact-SQL, CSS, BootStrap, Dojo Toolkit, 
									ArcGIS Javascript Toolkit, Chrome Extensions, Require.js, Node.js, Express web framework, Selenium	
					
								</div>
								<div className="col-md-5">
									<i className="fa fa-wrench"></i><h4>Developer tools-</h4>
									<b>Broad knowledge</b>
									{/* </br> */}
									TortoiseSVN, Git, Sourcetree, Visual Studio, Github									
								</div>
							</div>
							{/* </br> */}
							<div className="row">
								<div className="col-md-6">
									<i className="fa fa-desktop"></i><h4>Software-</h4>
									<b>Broad knowledge</b>
									{/* </br> */}
									ArcGIS, ArcGIS Online
															
								</div>
								<div className="col-md-5">
									<i className="fa fa-terminal"></i>
									<h4>Server Technologies-</h4>
									<b>Broad knowledge</b>
									{/* </br> */}
									IIS, ArcGIS Server, AWS, Node.js,
												
								</div>
							</div>
						</div>
						
						<span className="contentTitle">Example</span>
						
						
						<div id="content_examples" className="bs-callout bs-callout-default container sectionEnd sectionStart shadowContainer">
							<h4>Portfolio</h4>
									{/* </br> */}
							<div className="row">
								<div className="col-md-12">
									{/* </br> */}
									<b>Parcel Viewers</b>
									{/* </br> */}
									<a className="link toggle">Click here</a> to see examples of parcel viewers I've worked on
									
								</div>
							</div>
							<div className="row">
								<div className="col-md-12">
									{/* </br> */}
									<b>Budget Calculator</b>
									{/* </br> */}
									<a target="_blank" href="http://JNickBaughan.com/BudgetCalc" className="link">Click here</a>
									This is an application I designed while learning ASP.net MVC and the Dojo library.
								</div>
							</div>
							<div className="row">
								<div className="col-md-12">
									{/* </br> */}
									<b>Javascript Widget</b>
									{/* </br> */}
									<a id="filterToggle" className="link">Click here</a>
									This a javascript widget I designed using the Require.js module loader.
								</div>
							</div>
							<div className="row">
								<div className="col-md-12">
									{/* </br> */}
									<b>React Widget</b>
									{/* </br> */}
									<a target="_blank" href="https://codepen.io/collection/DLWxRO/" className="link">Click here</a>
									A work in constant progress... React Widgets I've been playing around with using Styled-Components and some CSS animations.
								</div>
							</div>
							<div className="row">
								<div className="col-md-12">
									{/* </br> */}
									<b>Learning the inner workings of React</b>
									{/* </br> */}
									<a target="_blank" href="https://codepen.io/JNickBaughan/pen/yKqmgJ?editors=0010" className="link">Click here</a>
									A project to better understand how React works under the hood. Based off of <a target="_blank" href="https://engineering.hexacta.com/didact-learning-how-react-works-by-building-it-from-scratch-51007984e5c5" className="link">this article</a>
								</div>
							</div>
							
						</div>
				
				
				<span className="contentTitle">Experience</span>
				<div id="content_experience">



					<div className="bs-callout bs-callout-default container sectionStart shadowContainer">
						<div className="row">
							<div className="col-md-2 circleImage">
								<div className="circleBase type3" >	
									<a href="http://www.costar.com/" target="_blank">
										<image style={{ marginTop: "22px", marginLeft: "11px" }} src="Content/images/CoStar.png"/>	
									</a>
								</div>
							</div>
							<div className="col-md-6">
								<h4 id="costar">CoStar Group</h4>
								Software Engineer
								{/* </br> */}
								<a href="http://www.costar.com/" target="_blank">
									www.costar.com	
								</a>
								{/* </br> */}
								2017 to Present
							</div>
						</div>
						{/* </br> */}
						<div className="row">
							<div className="col-md-10">
								{/* </br> */}			
								CoStar Group, Inc. supplies data, analytics and marketing services to the Real Estate Industry			 
								{/* </br> */}{/* </br> */}
								 I work as part of a small team working on a internal React application designed to help CoStar's research department manage their day to day interviews and efficiently collect the data that drives the business.

								 {/* </br> */}{/* </br> */}
								 I have designed and implemented several features using React including a component that allows for batch updating inline editable data and a wizard component that allows researchers to manage a broker's listings when they change companies.

							</div>
						</div>
					</div>


				
					<div className="bs-callout bs-callout-default container sectionStart shadowContainer">
						<div className="row">
							<div className="col-md-2 circleImage">
								<div className="circleBase type3" >	
									<a href="http://www.worldviewsolutions.com/#/" target="_blank">
										<image style={{ marginTop: "22px", marginLeft: "11px" }}  src="Content/images/WVS.jpg"/>	
									</a>
								</div>
							</div>
							<div className="col-md-6">
								<h4>WorldView Solutions</h4>
								Application Developer
								{/* </br> */}
								<a href="http://www.worldviewsolutions.com/#/" target="_blank">
									www.worldviewsolutions.com	
								</a>
								{/* </br> */}
								2012 to 2017
								
							</div>
						</div>
						{/* </br> */}
						<div className="row">
							<div className="col-md-10">
								{/* </br> */}
								 Worldview Solutions is a geospatial information technology consulting firm specializing 
								 in the delivery of GIS applications and services. They pride themselves on qualitiy
								 products delivered with an emphasis on customer service. 
								{/* </br> */}{/* </br> */}
								 In my first few years as a team member with Worldview Solutions my primary responsibility was refactoring the company's
								 <a className="link toggle">parcel viewer application</a> to be 
								 a more configurable and customizable product. I configured, deployed, 
								 and helped maintain 18 of these applications for various municipalities throughout Virginia working closely with the client.
								{/* </br> */}{/* </br> */} 
								I worked to design and implement an application for the Virginia Department of Health to 
								manage their water pollution citations. My code allowed users to filter through citations and
								generate a PDF using their ipads in the field. All data was collected and stored in ESRI's ArcGIS collector application.
								{/* </br> */}{/* </br> */} 
								While working with the Virginia Department of Environmental Quality I worked with a team to migrate several of their existing permit modules to a more modern web application. The new system is built with Backbone/Marionette with a restful backend built with ASP.NET's Entity Framework.
								{/* </br> */}{/* </br> */} 
							</div>
						</div>
					</div>
					
					<div className="bs-callout bs-callout-default container shadowContainer">
						<div className="row">
							<div className="col-md-2 circleImage">
								<div className="circleBase type3">
									<a href="http://business.vcu.edu/departments-and-centers/information-systems/" target="_blank">
										<image style={{ marginTop: "22px", marginLeft: "12px" }}  src="Content/images/VCU.png"/>
									</a>
								</div>
							</div>
							<div className="col-md-6">
								<h4>Virginia Commonwealth University</h4>
								C# / Web Development Student Tutor
								{/* </br> */}
								<a href="http://business.vcu.edu/departments-and-centers/information-systems/" target="_blank">
									business.vcu.edu/departments-and-centers	
								</a>
								{/* </br> */}
								2012
							</div>
						</div>
						{/* </br> */}
						<div className="row">
							<div className="col-md-10">
							{/* </br> */}
							Worked one-on-one with first year students within the Information System
							 track in subjects including HTML, CSS, Javascrip, & C#
							 {/* </br> */}{/* </br> */}
							</div>
						</div>
					</div>
				
					<div className="bs-callout bs-callout-default container shadowContainer">
						<div className="row">
							<div className="col-md-2 circleImage">
								<div className="circleBase type3">
									<a href="http://www.ferriswinder.com/" target="_blank">
									<image style={{ marginTop: "12px", marginLeft: "21px" }}  src="Content/images/ferrisWinder.png"/>
									</a>
								</div>
							</div>
							<div className="col-md-6">
								<h4>FerrisWinder PLLC</h4>
								Bankruptcy Paralegal
								{/* </br> */}
								<a href="http://www.ferriswinder.com/" target="_blank">
									www.ferriswinder.com
								</a>
								{/* </br> */}
								2013
							</div>
						</div>
						{/* </br> */}
						<div className="row">
							<div className="col-md-10">
								{/* </br> */}
								The law office of FerrisWinder PLLC provides legal services in bankruptcy, Real Estate, 
								Warranty/Lemon Law and more.
								{/* </br> */}{/* </br> */}
								As a bankruptcy paralegal for FerrisWinder I handled multiple 
								bankruptcies. This included preparation and filing of petitions, receiving
								and reviewing all client financial documents, maintaining scheduling of
								cases, and acting as a point of contact between attorneys and clients. 
								{/* </br> */}{/* </br> */}
							</div>
						</div>
					</div>
					
					
					<div className="bs-callout bs-callout-default container sectionEnd shadowContainer">
					<div className="row">
						<div className="col-md-2 circleImage">
							<div className="circleBase type3">
								<a href="http://www.bww-law.com/" target="_blank">
									<image style={{ marginTop: "23px", marginLeft: "7px" }} src="Content/images/BWW.jpg"/>
								</a>
							</div>
						</div>
						<div className="col-md-6">
							<h4>Beirman, Ward, & Wood</h4>
							Bankruptcy Paralegal | Motion Filer
							{/* </br> */}
								<a href="http://www.bww-law.com/" target="_blank">
									www.bww-law.com
								</a>
							{/* </br> */}
							2009 - 2010
						</div>
					</div>
					{/* </br> */}
					<div className="row">
						<div className="col-md-10">
						{/* </br> */}{/* </br> */}
						BWW Law Group, LLC provides legal representation in Maryland, Virginia and District
						of Columbia to mortgage lenders, mortgage serviceser, banks and other financial institutions.
						{/* </br> */}{/* </br> */}
						As a bankruptcy paralegal/Motion filer with BWW my responsibilities included
						reviewing financial documentation for cases, preparing and filing Motions for Relief
						and mailing notification to all proper parties.
						{/* </br> */}{/* </br> */}
						</div>
						
					</div>
				</div>
				
				
				
				</div> 
				
				
				<span className="contentTitle">Education</span>
				<div id="content_education">
					<div className="bs-callout bs-callout-default container sectionStart shadowContainer">
					<div className="row">
						<div className="col-md-2 circleImage">
							<div className="circleBase type3">
								<a href="http://www.wilder.vcu.edu/academic/certificate/geographic.html" target="_blank">
									<image style={{ marginTop: "23px", marginLeft: "12px" }} src="Content/images/VCU.png"/>
								</a>
							</div>
						</div>
						<div className="col-md-6">
							<h4>Virginia Commonwealth University</h4>
							Graduate Certificate of Geographic Information Systems
							{/* </br> */}
								<a href="http://www.wilder.vcu.edu/academic/certificate/geographic.html" target="_blank">
									www.wilder.vcu.edu/academic
								</a>
							{/* </br> */}
							Graduated 2010
						</div>
					</div>
					{/* </br> */}
					<div className="row">
						<div className="col-md-10">
							
						</div>
					</div>
				</div>
				
				<div className="bs-callout bs-callout-default container shadowContainer">
					<div className="row">
						<div className="col-md-2 circleImage">
							<div className="circleBase type3">
								<a href="http://www.wilder.vcu.edu/academic/urban/" target="_blank">
									<image style={{ marginTop: "23px", marginLeft: "12px" }} src="Content/images/VCU.png"/>
								</a>
							</div>
						</div>
						<div className="col-md-6">
							<h4>Virginia Commonwealth University</h4>
							Bachelors of Science in Urban Studies & Geography
							{/* </br> */}
								<a href="http://www.wilder.vcu.edu/academic/urban/" target="_blank">
									www.wilder.vcu.edu/academic/urban/
								</a>
							{/* </br> */}
							Graduated 2009
						</div>
					</div>
					{/* </br> */}
					<div className="row">
						<div className="col-md-10">
							
						</div>
					</div>
				</div>
				
				<div className="bs-callout bs-callout-default container endContainer shadowContainer">
					<div className="row">
						<div className="col-md-2 circleImage">
							<div className="circleBase type3">
								<a href="http://www.reynolds.edu/curriculum/business_administrationas.aspx" target="_blank">
									<image style={{ marginTop: "23px", marginLeft: "10px" }} src="Content/images/jsrcc.png"/>
								</a>
							</div>
						</div>
						<div className="col-md-6">
							<h4>J. Sargeant Reynolds Community College</h4>
							<span className="callout">Associates of Science in Business Administration
							{/* </br> */}
								<a href="http://www.reynolds.edu/curriculum/business_administrationas.aspx" target="_blank">
									www.reynolds.edu
								</a>
							{/* </br> */}
							Graduated 2006
							</span>
						</div>
					</div>
					{/* </br> */}
					<div className="row">
						<div className="col-md-10">
							
						</div>
					</div>
				</div>
				
				</div>
					</div>
					<div className="bottom_fade"></div>
				</div>
			</div>
		</div>
		
		
		
		
		
		
		
		<div id="parcelViewerWrapper" className="hidden content">
			<div className="top_fade"></div>
			
			<div id="scrollPV">
						<h3 className="startContainer" style={{ marginTop: "85px" }} >Parcel Viewers</h3>
						
						<p>
						One of my main responsibilities at WorldView has been refactoring the company's 
						parcel viewer application to be a more configurable and customizable product. 
						I have configured, deployed, and currently maintain 18 of these applications 
						for various municipalities throughout Virginia. The core of the application is built using 
						ASP.NET MVC.
						</p>
									{/* </br> */}{/* </br> */}
						<a className="back link">back to Resume</a>
						<div className="bs-callout-wide bs-callout-default innerContainter ">
							<div className="row">
								<div className="col-md-3">
									<div className="shadow">
										<a href="http://accomack.mapsdirect.net/Account/Logon" target="_blank">
											<image className="pvImage" src="Content/images/accomack.png"/>
										</a>
									</div>
								</div>
								<div className="col-md-9">
									<h4>Accomack County</h4>
									<a href="http://accomack.mapsdirect.net/Account/Logon" target="_blank">
										http://accomack.mapsdirect.net
									</a>
									{/* </br> */}
									{/* </br> */}
									
								</div>
							</div>
						</div>
						
				
						<div className="bs-callout-wide bs-callout-default innerContainter ">
							<div className="row">
								<div className="col-md-3">
									<div className="shadow">
										<a href="http://webgis.hampton.gov/sites/ParcelViewer/Account/Logon" target="_blank">
											<image className="pvImage" src="Content/images/hampton.png"/>
										</a>
									</div>
								</div>
								<div className="col-md-9">
									<h4>City of Hampton</h4>
									<a href="http://webgis.hampton.gov/sites/ParcelViewer/Account/Logon" target="_blank">
										http://webgis.hampton.gov
									</a>
									{/* </br> */}
									{/* </br> */}
									
								</div>
							</div>
						</div>
					
				
						<div className="bs-callout-wide bs-callout-default innerContainter endContainer ">
							<div className="row">
								<div className="col-md-3">
									<div className="shadow">
										<a href="http://property.jamescitycountyva.gov/JamesCity/Account/Logon" target="_blank">
											<image className="pvImage" src="Content/images/jcc.png"/>
										</a>
									</div>
								</div>
								<div className="col-md-9">
									<h4>James City County</h4>
									<a href="http://property.jamescitycountyva.gov/JamesCity/Account/Logon" target="_blank">
										http://property.jamescitycountyva.gov/JamesCity
									</a>
									{/* </br> */}
									{/* </br> */}
									
								</div>
							</div>
						</div>
					
			</div>
		<div className="bottom_fade"></div>
	</div>
	
	
	<div id="filterJSWrapper" className="hidden content">
			<div className="top_fade"></div>
			<div id="scrollfilter">
				<h3 className="startContainer" style={{ marginTop: "85px" }}>Parcel Viewers</h3>
						{/* </br> */}
						<a className="link" href="http://JNickBaughan.com/FilterJS" target="_blank">
						FilterJS
						</a>
						{/* </br> */}{/* </br> */}
						<p>
						This is a javascript widget I built using the require.js module loader. All planned functionality isn't complete yet
						but the code takes a json object to configure the searchable fields, the operators, and the value input. The widget
						manages the state and returns the where clause portions of a query that can be linked to a grid of results or anything else.
						</p>
						<p>
						Soon when it's complete the widget will manage multiple filters and multiple clauses on each filter. The search functionality will
						be able to return compound where clauses.
						</p>
						{/* </br> */}{/* </br> */}
						<a className="link back">back to Resume</a>
			</div>
			<div className="bottom_fade"></div>
	</div>

	<div id="calcWrapper" className="hidden">
			<div className="top_fade"></div>
			<div id="scrollcalc">
				
			</div>
			<div className="bottom_fade"></div>
	</div>
									

		
	</div>
	</>
  );
}






export default App;
