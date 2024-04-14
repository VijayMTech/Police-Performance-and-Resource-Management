# import sys
# import streamlit as st
# import pandas as pd
# import plotly.express as px
# import pdfkit


# # Load FIR dataset
# fir_data = pd.read_csv("Copy of FIR_Details_Data.csv", low_memory=False)

# # Define the layout of the dashboard
# st.title('Police Performance Dashboard')
# arg = sys.argv
# userId = arg[1]
# selected_UnitId = int(userId)

# # Filter data based on selected district
# filtered_data = fir_data[fir_data['Unit_ID'] == selected_UnitId]
# unitname = filtered_data['UnitName'].unique()[0]
# st.title(f'{unitname}-{selected_UnitId}')

# # Dropdown to select IONAme
# selected_ioname = st.selectbox('Select IO NAme', filtered_data['IOName'].unique())

# # Filter data based on selected IONAme
# filtered_data = filtered_data[filtered_data['IOName'] == selected_ioname]

# # Dropdown to select year
# selected_year = st.selectbox('Select Year:', filtered_data['Year'].unique())

# # Filter data based on selected year
# filtered_data = filtered_data[filtered_data['Year'] == selected_year]

# # FIR Stage Distribution
# fir_stage_distribution = filtered_data['FIR_Stage'].value_counts()
# st.plotly_chart(px.pie(fir_stage_distribution, values=fir_stage_distribution.values, names=fir_stage_distribution.index,
#                        title=f'FIR Stage Distribution for {selected_ioname}'))

# # Complaint Mode Analysis
# complaint_mode_analysis = filtered_data['Complaint_Mode'].value_counts()
# st.plotly_chart(px.bar(complaint_mode_analysis, x=complaint_mode_analysis.index, y=complaint_mode_analysis.values,
#                         title=f'Complaint Mode Analysis for {selected_ioname}',
#                         labels={'x': 'Complaint Mode', 'y': 'Frequency'}))

# # Victim and Accused Counts
# victim_count = filtered_data['VICTIM COUNT'].sum()
# accused_count = filtered_data['Accused Count'].sum()
# arrested_male_count = filtered_data['Arrested Male'].sum()
# arrested_female_count = filtered_data['Arrested Female'].sum()
# total_arrested_count = filtered_data['Arrested Count\tNo.'].sum()

# counts_data = {
#     'Category': ['Victims', 'Accused', 'Arrested (Male)', 'Arrested (Female)'],
#     'Count': [victim_count, accused_count, arrested_male_count, arrested_female_count]
# }
# st.plotly_chart(px.bar(counts_data, x='Category', y='Count', color='Category',
#                         title=f'Counts for Victims, Accused, and Arrested Individuals in {selected_ioname}',
#                         labels={'Count': 'Count'}))

# # Conviction Count
# conviction_count = filtered_data['Conviction Count'].sum()
# st.plotly_chart(px.bar(x=['Conviction'], y=[conviction_count], title=f'Conviction Count in {selected_UnitId}'))

# # Response Time Analysis
# filtered_data['Offence_From_Date'] = pd.to_datetime(filtered_data['Offence_From_Date'], errors='coerce')
# filtered_data['FIR_Date'] = pd.to_datetime(filtered_data['FIR_Date'], errors='coerce')
# filtered_data['Response_Time'] = (filtered_data['FIR_Date'] - filtered_data['Offence_From_Date']).dt.total_seconds() / 60
# st.plotly_chart(px.histogram(filtered_data.dropna(subset=['Response_Time']), x='Response_Time',
#                               title=f'Response Time Distribution in {selected_ioname}',
#                               labels={'Response_Time': 'Response Time (minutes)'}))

# # Download button for PDF report
# def download_report():
#     rendered_report = f"""
#     <h1>{unitname}-{selected_UnitId}</h1>
#     <h2>FIR Stage Distribution for {selected_ioname}</h2>
#     {px.pie(fir_stage_distribution, values=fir_stage_distribution.values, names=fir_stage_distribution.index,
#             title=f'FIR Stage Distribution for {selected_ioname}').to_html()}
#     <h2>Complaint Mode Analysis for {selected_ioname}</h2>
#     {px.bar(complaint_mode_analysis, x=complaint_mode_analysis.index, y=complaint_mode_analysis.values,
#             title=f'Complaint Mode Analysis for {selected_ioname}',
#             labels={'x': 'Complaint Mode', 'y': 'Frequency'}).to_html()}
#     <h2>Counts for Victims, Accused, and Arrested Individuals in {selected_ioname}</h2>
#     {px.bar(counts_data, x='Category', y='Count', color='Category',
#             title=f'Counts for Victims, Accused, and Arrested Individuals in {selected_ioname}',
#             labels={'Count': 'Count'}).to_html()}
#     <h2>Conviction Count in {selected_UnitId}</h2>
#     {px.bar(x=['Conviction'], y=[conviction_count], title=f'Conviction Count in {selected_UnitId}').to_html()}
#     <h2>Response Time Distribution in {selected_ioname}</h2>
#     {px.histogram(filtered_data.dropna(subset=['Response_Time']), x='Response_Time',
#                 title=f'Response Time Distribution in {selected_ioname}',
#                 labels={'Response_Time': 'Response Time (minutes)'}).to_html()}
#     """
#     pdfkit.from_string(rendered_report, "report.pdf", configuration=pdfkit.configuration(wkhtmltopdf="E:/wkhtmltopdf/bin/wkhtmltopdf.exe"))

# if st.button("Download Report"):
#     print("downladclicked:")
#     download_report()
import streamlit as st
import pandas as pd
import plotly.express as px
import pdfkit
from tempfile import NamedTemporaryFile

# Load FIR dataset
fir_data = pd.read_csv("Copy of FIR_Details_Data.csv", low_memory=False)

# Define the layout of the dashboard
st.title('Police Performance Dashboard')
userId = st.text_input("Enter User ID")

# Check if userId is not empty and is a valid integer
if userId.strip() and userId.isdigit():
    selected_UnitId = int(userId)

    # Filter data based on selected district
    filtered_data = fir_data[fir_data['Unit_ID'] == selected_UnitId]
    unitname = filtered_data['UnitName'].unique()[0]
    st.title(f'{unitname}-{selected_UnitId}')

    # Dropdown to select IONAme
    selected_ioname = st.selectbox('Select IO Name', filtered_data['IOName'].unique())

    # Filter data based on selected IONAme
    filtered_data = filtered_data[filtered_data['IOName'] == selected_ioname]

    # Dropdown to select year
    selected_year = st.selectbox('Select Year:', filtered_data['Year'].unique())

    # Filter data based on selected year
    filtered_data = filtered_data[filtered_data['Year'] == selected_year]

    # FIR Stage Distribution
    fir_stage_distribution = filtered_data['FIR_Stage'].value_counts()
    st.plotly_chart(px.pie(fir_stage_distribution, values=fir_stage_distribution.values, names=fir_stage_distribution.index,
                           title=f'FIR Stage Distribution for {selected_ioname}'))

    # Complaint Mode Analysis
    complaint_mode_analysis = filtered_data['Complaint_Mode'].value_counts()
    st.plotly_chart(px.bar(complaint_mode_analysis, x=complaint_mode_analysis.index, y=complaint_mode_analysis.values,
                            title=f'Complaint Mode Analysis for {selected_ioname}',
                            labels={'x': 'Complaint Mode', 'y': 'Frequency'}))

    # Victim and Accused Counts
    victim_count = filtered_data['VICTIM COUNT'].sum()
    accused_count = filtered_data['Accused Count'].sum()
    arrested_male_count = filtered_data['Arrested Male'].sum()
    arrested_female_count = filtered_data['Arrested Female'].sum()
    total_arrested_count = filtered_data['Arrested Count\tNo.'].sum()

    counts_data = {
        'Category': ['Victims', 'Accused', 'Arrested (Male)', 'Arrested (Female)'],
        'Count': [victim_count, accused_count, arrested_male_count, arrested_female_count]
    }
    st.plotly_chart(px.bar(counts_data, x='Category', y='Count', color='Category',
                            title=f'Counts for Victims, Accused, and Arrested Individuals in {selected_ioname}',
                            labels={'Count': 'Count'}))

    # Conviction Count
    conviction_count = filtered_data['Conviction Count'].sum()
    st.plotly_chart(px.bar(x=['Conviction'], y=[conviction_count], title=f'Conviction Count in {selected_UnitId}'))

    # Response Time Analysis
    filtered_data['Offence_From_Date'] = pd.to_datetime(filtered_data['Offence_From_Date'], errors='coerce')
    filtered_data['FIR_Date'] = pd.to_datetime(filtered_data['FIR_Date'], errors='coerce')
    filtered_data['Response_Time'] = (filtered_data['FIR_Date'] - filtered_data['Offence_From_Date']).dt.total_seconds() / 60
    st.plotly_chart(px.histogram(filtered_data.dropna(subset=['Response_Time']), x='Response_Time',
                                  title=f'Response Time Distribution in {selected_ioname}',
                                  labels={'Response_Time': 'Response Time (minutes)'}))

    # Download button for PDF report
    def download_report():
        rendered_report = f"""
        <h1>{unitname}-{selected_UnitId}</h1>
        <h2>FIR Stage Distribution for {selected_ioname}</h2>
        {px.pie(fir_stage_distribution, values=fir_stage_distribution.values, names=fir_stage_distribution.index,
                title=f'FIR Stage Distribution for {selected_ioname}').to_html()}
        <h2>Complaint Mode Analysis for {selected_ioname}</h2>
        {px.bar(complaint_mode_analysis, x=complaint_mode_analysis.index, y=complaint_mode_analysis.values,
                title=f'Complaint Mode Analysis for {selected_ioname}',
                labels={'x': 'Complaint Mode', 'y': 'Frequency'}).to_html()}
        <h2>Counts for Victims, Accused, and Arrested Individuals in {selected_ioname}</h2>
        {px.bar(counts_data, x='Category', y='Count', color='Category',
                title=f'Counts for Victims, Accused, and Arrested Individuals in {selected_ioname}',
                labels={'Count': 'Count'}).to_html()}
        <h2>Conviction Count in {selected_UnitId}</h2>
        {px.bar(x=['Conviction'], y=[conviction_count], title=f'Conviction Count in {selected_UnitId}').to_html()}
        <h2>Response Time Distribution in {selected_ioname}</h2>
        {px.histogram(filtered_data.dropna(subset=['Response_Time']), x='Response_Time',
                    title=f'Response Time Distribution in {selected_ioname}',
                    labels={'Response_Time': 'Response Time (minutes)'}).to_html()}
        """
        # Generate PDF using wkhtmltopdf
        pdf_bytes = pdfkit.from_string(rendered_report, False, configuration=pdfkit.configuration(wkhtmltopdf="E:/wkhtmltopdf/bin/wkhtmltopdf.exe"))

        # Save PDF to a temporary file
        with NamedTemporaryFile(delete=False, suffix=".pdf") as tmp_file:
            tmp_file.write(pdf_bytes)
            tmp_file.close()

            # Download the temporary file
            st.download_button(label="Download Report", data=open(tmp_file.name, "rb").read(), file_name="report2.pdf")

    # Button to trigger report download
    if st.button("Generate Report"):
        download_report()
else:
    st.warning("Please enter a valid User ID.")
