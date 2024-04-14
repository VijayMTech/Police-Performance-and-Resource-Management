
import streamlit as st
import pandas as pd
import plotly.express as px
from streamlit.web import cli as stcli
from streamlit import runtime
import sys
def main():
    # Load FIR dataset
    fir_data = pd.read_csv("E:/KSP Datathon 2024/Prototype Phase (LEVEL 2)/web2/policeperformance/backend/Copy of FIR_Details_Data.csv", low_memory=False)

    # Define available districts
    available_districts = fir_data['District_Name'].unique()

    # HTTP request handling
    if st._is_running_with_streamlit:
        from streamlit.server.server import Server

        server = Server.get_current()
        handler = server.get_handler()

        @st.cache
        def fetch_data():
            return fir_data  # You can modify this to fetch data based on requests

        @handler.add_route("/login", methods=["POST"])
        async def login_request_handler(request):
            data = await request.json()
            user_id = data.get('userId')
            password = data.get('password')
            # Validate credentials and return response
            return {'status': 'success', 'message': 'Login successful'}  # Example response

    # Main app code
    st.title('Police Performance Dashboard')

    # Dropdown to select district
    selected_district = st.selectbox('Select District:', available_districts)

    # Filter data based on selected district
    filtered_data = fir_data[fir_data['District_Name'] == selected_district]

    # Dropdown to select police station
    selected_police_station = st.selectbox('Select Police Station:', filtered_data['UnitName'].unique())

    # Filter data based on selected police station
    filtered_data = filtered_data[filtered_data['UnitName'] == selected_police_station]

    # Dropdown to select year
    selected_year = st.selectbox('Select Year:', filtered_data['Year'].unique())

    # Filter data based on selected year
    filtered_data = filtered_data[filtered_data['Year'] == selected_year]

    # FIR Stage Distribution
    fir_stage_distribution = filtered_data['FIR_Stage'].value_counts()
    st.plotly_chart(px.pie(fir_stage_distribution, values=fir_stage_distribution.values, names=fir_stage_distribution.index,
                           title=f'FIR Stage Distribution for {selected_police_station}'))

    # Complaint Mode Analysis
    complaint_mode_analysis = filtered_data['Complaint_Mode'].value_counts()
    st.plotly_chart(px.bar(complaint_mode_analysis, x=complaint_mode_analysis.index, y=complaint_mode_analysis.values,
                            title=f'Complaint Mode Analysis for {selected_police_station}',
                            labels={'x': 'Complaint Mode', 'y': 'Frequency'}))

    # Victim and Accused Counts
    victim_count = filtered_data['VICTIM COUNT'].sum()
    accused_count = filtered_data['Accused Count'].sum()
    arrested_male_count = filtered_data['Arrested Male'].sum()
    arrested_female_count = filtered_data['Arrested Female'].sum()
    #total_arrested_count = filtered_data['Arrested Count No.'].sum()
    total_arrested_count = filtered_data['Arrested Count\tNo.'].sum()

    counts_data = {
        'Category': ['Victims', 'Accused', 'Arrested (Male)', 'Arrested (Female)'],
        'Count': [victim_count, accused_count, arrested_male_count, arrested_female_count]
    }
    st.plotly_chart(px.bar(counts_data, x='Category', y='Count', color='Category',
                            title=f'Counts for Victims, Accused, and Arrested Individuals in {selected_police_station}',
                            labels={'Count': 'Count'}))

    # Arrested Gender Distribution
    arrested_gender_distribution = filtered_data[['Arrested Male', 'Arrested Female']].sum()
    st.plotly_chart(px.bar(arrested_gender_distribution, x=arrested_gender_distribution.index, y=arrested_gender_distribution.values,
                            title=f'Arrested Gender Distribution in {selected_police_station}',
                            labels={'x': 'Gender', 'y': 'Count'}))

    # Conviction Count
    conviction_count = filtered_data['Conviction Count'].sum()
    st.plotly_chart(px.bar(x=['Conviction'], y=[conviction_count], title=f'Conviction Count in {selected_district}'))

    # Response Time Analysis
    filtered_data['Offence_From_Date'] = pd.to_datetime(filtered_data['Offence_From_Date'], errors='coerce')
    filtered_data['FIR_Date'] = pd.to_datetime(filtered_data['FIR_Date'], errors='coerce')

    filtered_data['Response_Time'] = (filtered_data['FIR_Date'] - filtered_data['Offence_From_Date']).dt.total_seconds() / 60
    
    #filtered_data['Response_Time'] = filtered_data['Response_Time'].clip(lower=0)  # Ensure response time is non-negative

    st.plotly_chart(px.histogram(filtered_data.dropna(subset=['Response_Time']), x='Response_Time',
                                  title=f'Response Time Distribution in {selected_police_station}',
                                  labels={'Response_Time': 'Response Time (minutes)'}))

if __name__ == '__main__':
    if runtime.exists():
        main()
    else:
        sys.argv = ["streamlit", "run", sys.argv[0]]
        sys.exit(stcli.main())
