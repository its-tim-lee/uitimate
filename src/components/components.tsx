// Below cases are undiscoverable by Builder Devtools
// Case-1:
// export { default as Alert } from '@mui/material/Alert';
//
// Case-2:
// import Alert from '@mui/material/Alert';
// export default Alert;


export { Alert } from '@mui/material';

// force-re-discover
// updater matter can't change the outcome in the existing Figma-imports content on CMS