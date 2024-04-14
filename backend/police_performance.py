# import streamlit as st
# import pandas as pd
# import plotly.express as px

# # Load FIR dataset
# fir_data = pd.read_csv("data/Copy of FIR_Details_Data.csv")

# # Define available districts
# available_districts = fir_data['District_Name'].unique()

# # Main app code
# def main():
#     st.title('Police Performance Dashboard')

#     # Dropdown to select district
#     selected_district = st.selectbox('Select District:', available_districts)

#     if selected_district:
#         filtered_data = fir_data[fir_data['District_Name'] == selected_district]

#         # FIR Stage Distribution
#         fir_stage_distribution = filtered_data['FIR_Stage'].value_counts()
#         fir_stage_distribution_fig = px.pie(fir_stage_distribution, values=fir_stage_distribution.values, names=fir_stage_distribution.index,
#                                             title=f'FIR Stage Distribution for {selected_district}')
#         st.plotly_chart(fir_stage_distribution_fig)

#         # Complaint Mode Analysis
#         complaint_mode_analysis = filtered_data['Complaint_Mode'].value_counts()
#         complaint_mode_analysis_fig = px.bar(complaint_mode_analysis, x=complaint_mode_analysis.index, y=complaint_mode_analysis.values,
#                                              title=f'Complaint Mode Analysis for {selected_district}',
#                                              labels={'x': 'Complaint Mode', 'y': 'Frequency'})
#         st.plotly_chart(complaint_mode_analysis_fig)

#         # Victim and Accused Counts
#         victim_count = filtered_data['VICTIM COUNT'].sum()
#         accused_count = filtered_data['Accused Count'].sum()
#         arrested_male_count = filtered_data['Arrested Male'].sum()
#         arrested_female_count = filtered_data['Arrested Female'].sum()
#         # total_arrested_count = filtered_data['Arrested Count No'].sum()  # Fixed column name here
#         total_arrested_count = filtered_data['Arrested Count\tNo.'].sum()

#         counts_data = {
#             'Category': ['Victims', 'Accused', 'Arrested (Male)', 'Arrested (Female)'],
#             'Count': [victim_count, accused_count, arrested_male_count, arrested_female_count]
#         }
#         counts_fig = px.bar(counts_data, x='Category', y='Count', color='Category',
#                             title=f'Counts for Victims, Accused, and Arrested Individuals in {selected_district}',
#                             labels={'Count': 'Count'})
#         st.plotly_chart(counts_fig)

#         # Arrested Gender Distribution
#         arrested_gender_distribution = filtered_data[['Arrested Male', 'Arrested Female']].sum()
#         arrested_gender_distribution_fig = px.bar(arrested_gender_distribution, x=arrested_gender_distribution.index, y=arrested_gender_distribution.values,
#                                                   title=f'Arrested Gender Distribution in {selected_district}',
#                                                   labels={'x': 'Gender', 'y': 'Count'})
#         st.plotly_chart(arrested_gender_distribution_fig)

#         # Conviction Count
#         conviction_count = filtered_data['Conviction Count'].sum()
#         conviction_count_fig = px.bar(x=['Conviction'], y=[conviction_count], title=f'Conviction Count in {selected_district}')
#         st.plotly_chart(conviction_count_fig)

#         # Response Time Analysis
#         filtered_data['Offence_From_Date'] = pd.to_datetime(filtered_data['Offence_From_Date'], errors='coerce')
#         filtered_data['FIR_Date'] = pd.to_datetime(filtered_data['FIR_Date'], errors='coerce')
#         filtered_data['Response_Time'] = (filtered_data['FIR_Date'] - filtered_data['Offence_From_Date']).dt.total_seconds() / 60
#         response_time_fig = px.histogram(filtered_data.dropna(subset=['Response_Time']), x='Response_Time', title=f'Response Time Distribution in {selected_district}',
#                                          labels={'Response_Time': 'Response Time (minutes)'})
#         st.plotly_chart(response_time_fig)

# # Run the Streamlit app
# if __name__ == '__main__':
#     main()


# ***********************************************************************************************************************************

import streamlit as st
import pandas as pd
import plotly.express as px

# Load FIR dataset
fir_data = pd.read_csv("Copy of FIR_Details_Data.csv", low_memory=False)

# Define available districts
available_districts = fir_data['District_Name'].unique()

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

# ********************************************************************************************************************