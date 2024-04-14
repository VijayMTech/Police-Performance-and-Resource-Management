# Police Performance Dashboard

## Overview
The Police Performance Dashboard is a web application designed to provide insights into the performance of police units based on various metrics such as FIR stage distribution, complaint mode analysis, victim and accused counts, arrested gender distribution, conviction count, and response time analysis. This dashboard aims to assist law enforcement agencies in evaluating their performance and making data-driven decisions.

## Features
- **FIR Stage Distribution:** Visualizes the distribution of FIR (First Information Report) stages, including pending FIRs and convictions.
- **Complaint Mode Analysis:** Analyzes the modes through which complaints are received by the police.
- **Victim and Accused Counts:** Presents the counts of victims and accused individuals involved in FIRs.
- **Arrested Gender Distribution:** Displays the gender distribution of individuals arrested in connection with FIRs.
- **Conviction Count:** Shows the total count of convictions achieved by the police unit.
- **Response Time Analysis:** Analyzes the response time of the police unit to incidents reported in FIRs.

## Usage
### Station Login
1. **Authenticate:**
    - Enter the Station ID and password to log in.
2. **Select Parameters for Individual Performance Analysis:**
    - **Select IOName:** Choose the Investigating Officer (IOName) for detailed analysis.
    - **Select Year:** Select the year for which you want to view the performance metrics.
3. **View Dashboard:**
    - After selecting the required parameters, the dashboard will dynamically update to display the selected metrics for individual performance.

### DSP Station Login
1. **Authenticate:**
    - Enter the DSP Station ID and password to log in.
2. **Select Parameters for Overall Performance Analysis:**
    - **Select District:** Choose the district for which you want to view the overall performance.
    - **Select UnitName:** Choose the police unit within the selected district.
    - **Select Year:** Select the year for which you want to view the performance metrics.
3. **View Dashboard:**
    - After selecting the required parameters, the dashboard will dynamically update to display the selected metrics for overall performance.

## Installation and Running
To run the Police Performance Dashboard locally, follow these steps:

1. Clone this repository to your local machine.
2. Install the required dependencies by running `pip install -r requirements.txt`.
3. Download the Copy_of_FIR_Data from https://drive.google.com/file/d/1H-8Ze0cpiEg7fNJM4OCeJXHJjwbKIzbm/view?usp=drive_link  and copy it to the folder backend.
4. In the project directory, you can run:
     ### `npm start
5. Run the Flask app Api  by executing the script `python flaskapp.py`.
6. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
7. Role based Login is performed (Station Login or DSP Login(Rounded Profile Icon)
8. Access the dashboard through your web browser.


## Data Source
The data used in this dashboard is sourced from the `FIR_Details_Data.csv` file, which contains detailed information about FIRs registered by police units.
## Dataset Link : https://drive.google.com/file/d/1H-8Ze0cpiEg7fNJM4OCeJXHJjwbKIzbm/view?usp=drive_link

## Technologies Used
- ReactJS (Frontend Framework)
- Firebase (Realtime Database Authentication(JWT))
- Flask (Python Framework for building API's)
- Streamlit (Python framework for building web applications)
- Pandas (Data manipulation library)
- Plotly Express (Visualization library)

## PROTOTYPR
![Image 1]([https://drive.google.com/file/d/1ogdK7t5by-IK1LlFYytMEuJYYzrDr3jW/view?usp=drive_link](https://drive.google.com/file/d/1ogdK7t5by-IK1LlFYytMEuJYYzrDr3jW/view))
![Image 2](https://drive.google.com/file/d/1b_HRawkMOoxaUZLgGmt_hnxJloYm4cVO/view?usp=drive_link)
![Image 3](https://drive.google.com/uc?export=view&id=YourFileID3)

## Contributors
[Mahendran]  
[mahendran.06335@gmail.com]

[Amirtha Sagar K]  
[amirthasagar2003@gmail.com]

[Vikas J]  
[vikasjayakumar41902@gmail.com]


