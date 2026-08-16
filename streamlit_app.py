import streamlit as st
import streamlit.components.v1 as components
import os

# Page configuration
st.set_page_config(
    page_title="Zoho 10-Day Prep Planner",
    page_icon="🎓",
    layout="wide",
    initial_sidebar_state="collapsed"
)

# Custom CSS to make Streamlit container full screen
st.markdown("""
    <style>
        #MainMenu {visibility: hidden;}
        footer {visibility: hidden;}
        header {visibility: hidden;}
        .block-container {
            padding: 0rem !important;
            margin: 0rem !important;
            max-width: 100% !important;
        }
        iframe {
            width: 100% !important;
            border: none !important;
        }
    </style>
""", unsafe_allow_html=True)

# Read HTML, CSS, JS files
dir_path = os.path.dirname(os.path.realpath(__file__))

html_path = os.path.join(dir_path, "index.html")
css_path = os.path.join(dir_path, "style.css")
js_path = os.path.join(dir_path, "app.js")

with open(html_path, "r", encoding="utf-8") as f:
    html_content = f.read()

with open(css_path, "r", encoding="utf-8") as f:
    css_content = f.read()

with open(js_path, "r", encoding="utf-8") as f:
    js_content = f.read()

# Embed CSS and JS directly into the HTML
bundled_html = html_content.replace(
    '<link rel="stylesheet" href="style.css">',
    f'<style>{css_content}</style>'
).replace(
    '<script src="app.js"></script>',
    f'<script>{js_content}</script>'
)

# Render full height interactive web application
components.html(bundled_html, height=1000, scrolling=True)
