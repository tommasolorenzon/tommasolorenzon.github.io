import gpm3dImg from '../assets/projects/gpm_3d.png'
import polarPlotImg from '../assets/projects/polar_plot_winds.png'

export type ProjectExtra = { 
	type: "image" | "pdf" | "link"; 
	src: string; 
	alt?: string; 
	label?: string;
	width?: string; // e.g., "400px", "80%", "600px" - only used for images
}

export interface Project {
	title: string
	subtitle: string
	date: string
	institution: string
	description: string
	extras: ProjectExtra[]
}

export const projects: Project[] = [
	{
		title: "Radiological safety assessments for the ATLAS experiment (CERN LHC)",
		subtitle: "Risk assessment and radioactivity forecasting using Monte Carlo methods for LHC Long Shutdown 3",
		date: "Feb 2024 - Nov 2024",
		institution: "CERN",
	description: `
- **Objectives:** Provide reliable forecasts of residual dose rates for maintenance and upgrade planning in the [ATLAS experiment](https://atlas.cern/) to ensure radiological safety during LHC Long Shutdown 3.  
- **Methodology:** Large-scale Monte Carlo radiation-transport simulations using FLUKA on HPC clusters (hundreds of CPUs, ~1 year of total CPU time); post-processing into dose-rate maps for operational guidance. Validation performed against Long Shutdown 2 in-situ data.  
- **Case Study:** Evaluation of multiple detector configurations and cooldown scenarios in the ATLAS experimental cavern, with dose-rate predictions at technician access points.  
- **Results:** Approximately 500 dose-rate map scenarios generated and delivered to ATLAS Technical Coordination for operational planning.
`,
		extras: [],
	},
	{
		title: "Radiological safety assessments for the CMS experiment (CERN LHC)",
		subtitle: "Risk assessment and radioactivity forecasting using Monte Carlo methods for LHC Long Shutdown 3",
		date: "Feb 2023 - Nov 2023",
		institution: "CERN",
	description: `
- **Objectives:** Provide reliable forecasts of residual dose rates for maintenance and upgrade planning in the [CMS experiment](https://cms.cern/) to ensure radiological safety during LHC Long Shutdown 3.  
- **Methodology:** Large-scale Monte Carlo radiation-transport simulations using FLUKA on HPC clusters (hundreds of CPUs, ~1 year of total CPU time); post-processing into dose-rate maps for operational guidance.  
- **Case Study:** Evaluation of multiple detector configurations and cooldown scenarios in the CMS experimental cavern, with dose-rate predictions at technician access points.  
- **Results:** Approximately 500 dose-rate map scenarios generated and delivered to CMS Technical Coordination for operational planning.
`,
		extras: [],
	},
	{
		title: "A computational method for assessing the dose due to chronic release of radioactive air: a hadron therapy facility case study",
		subtitle: "Master of Science - thesis",
		date: "Oct 2019 - Jun 2020",
		institution: "Politecnico di Milano",
		description: `
- **Objectives:** Develop a computational workflow to estimate public and occupational doses from chronic releases of airborne activation products in hadron therapy facilities.
- **Methodology:** Used FLUKA Monte Carlo code to simulate production of airborne radionuclides in accelerator and treatment-hall structures; calculated inhalation and submersion doses with established tools (HotSpot, GENII v2.10) under conservative exposure scenarios; modeled atmospheric dispersion with a Gaussian Plume Model; analyzed meteorological data.
- **Case Study:** Applied the workflow to CNAO (Centro Nazionale di Adroterapia Oncologica), using facility geometry, source terms from simulations, and local meteorological data.
- **Results:** Obtained conservative annual public-dose estimates; identified limits of the assessment and proposed next-step refinements. The thesis is stored in the [University Archive](https://hdl.handle.net/10589/176260) and a part was [published](https://doi.org/10.1093/rpd/ncae218) in a peer-review journal.
`,
		extras: [
			{ 
				type: "image", 
				src: gpm3dImg, 
				alt: "3D visualization of Gaussian Plume Model dispersion", 
				width: "60%" 
			},
			{ 
				type: "image", 
				src: polarPlotImg, 
				alt: "Polar plot showing wind direction distribution",
				width: "50%"
			}
		],
	},
	{
		title: "Design Analysis of a Lead-cooled Fast Reactor Fuel Assembly",
		subtitle: "Nuclear Design and Technology M.Sc. course",
		date: "Oct 2019 - Jan 2020",
		institution: "Politecnico di Milano",
		description: `
- **Objectives:** Conduct technical analyses of nuclear fuel assemblies to quantify thermal-hydraulic performance and fuel-pin behavior, providing quantitative predictions of temperature distributions, stress fields, and safety margins for advanced fast-reactor design.
- **Methodology:** Thermal-hydraulic evaluations (coolant flow distribution, heat transfer, and pressure drops) in representative average and hot channels; 
fuel-pin thermal-mechanical modeling to compute radial and axial temperature profiles and assess stresses, creep behavior, and fracture criteria; 
consideration of irradiation-induced phenomena and material behavior under operational conditions; considerations on ASME standards.
- **Case Study:** Analysis of representative average and hot-channel scenarios, including hot-geometry effects (gap closure and material restructuring) and their impact on peak fuel temperatures and mechanical integrity.
- **Results:** Delivered detailed temperature distributions and stress estimates, with quantified safety margins. Identified key sensitivities to geometry and material properties.
	`,
		extras: [],
	},
	{
		title: "A Monte Carlo Simulation for Reliability and Risk Analysis of an Industrial System",
		subtitle: "Reliability and risk analysis M.Sc. course",
		date: "Apr 2019 - Jun 2019",
		institution: "Politecnico di Milano",
		description: `
- **Objectives:** Evaluate system reliability and quantify operational risk metrics to inform maintenance and design decisions for a complex industrial system.
- **Methodology:** Implemented a MATLAB-based Monte Carlo simulation modeling components, failure modes, and repair strategies; computed availability, downtime distributions and risk indicators; performed statistical analysis on simulation outputs to estimate confidence intervals for key metrics.
- **Case Study:** Applied the simulation to a representative industrial system with multiple redundant subsystems and repair policies.
- **Results:** Estimated system availability, expected downtime, and identified components with highest risk contribution; recommended targeted reliability improvements.
	`,
		extras: [],
	},
 {
		title: "Physical techniques in medical diagnostics",
		subtitle: "Master of Science course",
		date: "Apr 2019 - Jun 2019",
		institution: "Politecnico di Milano",
	description: `
- **Objectives:** Implement and validate quantitative image-quality assessment methods for a digital radiographic detector to support detector characterization and QC.
- **Methodology:** Computed Modulation Transfer Function (MTF) using the edge method, Noise Power Spectrum (NPS) from flat-field images, and Detective Quantum Efficiency (DQE) following IEC 62220-1; implemented processing and Fourier-analysis routines in MATLAB and compared results against reference COQ software.
- **Case Study:** Evaluated a Trixell Pixium 4600 detector across exposure levels to derive spatial-frequency dependent performance metrics.
- **Results:** MATLAB-derived MTF, NPS and DQE curves matched reference data, validating the implemented procedures for detector characterization.
`,
		extras: [],
	},
	{
		title: "Post-ischemic ventricular analysis using MRI images",
		subtitle: "Bachelor of Science - thesis (original language: Italian)",
		date: "Apr 2018 - Jun 2018",
		institution: "Politecnico di Milano",
		description: `
- **Objectives:** Use and test of image post-processing methods to quantify ventricular structural changes following ischemia using MRI.
- **Methodology:** Processed cardiac MRI sequences to segment ventricular contours and extract functional/structural metrics (volumes, wall thickness); applied MATLAB-based image-analysis and statistical comparisons versus baseline cohorts.
- **Case Study:** Bachelor thesis project applying the pipeline to a clinical MRI dataset; focused on post-ischemic ventricular remodeling.
- **Results:** Produced quantitative ventricular metrics and visualizations supporting post-ischemic assessment; documented methods and results in a final thesis report.
	`,
		extras: [],
	}
]


