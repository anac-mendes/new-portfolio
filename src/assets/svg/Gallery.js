import * as React from "react";

const Gallery = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width ? props.width : "800"}
    height={props.height ? props.height : "100%"}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke={props.color ? props.color : "#1C274C"}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12c0-1.128 0-2.122.02-3M12 2C7.286 2 4.929 2 3.464 3.464c-.424.425-.726.925-.94 1.536"
    />
    <path
      stroke={props.color ? props.color : "#1C274C"}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m2 12.5 1.752-1.533a2.3 2.3 0 0 1 3.14.105l4.29 4.29a2 2 0 0 0 2.564.222l.299-.21a3 3 0 0 1 3.731.225L21 18.5"
    />
    <path
      fill={props.color ? props.color : "#1C274C"}
      d="m16.06 8.57.492-.566-.492.566ZM18 3.968l-.532.529a.75.75 0 0 0 1.064 0L18 3.967Zm1.94 4.602-.492-.566.492.566ZM18 9.606v-.75.75Zm-1.448-1.602c-.486-.422-.952-.895-1.292-1.374-.347-.49-.51-.914-.51-1.255h-1.5c0 .788.358 1.518.786 2.122.435.614.999 1.175 1.533 1.639l.983-1.132ZM14.75 5.375c0-.933.42-1.404.834-1.557.426-.156 1.13-.08 1.884.679l1.064-1.058c-1.045-1.05-2.342-1.442-3.466-1.028-1.136.418-1.816 1.555-1.816 2.964h1.5Zm5.681 3.761c.534-.464 1.098-1.025 1.533-1.639.428-.604.786-1.334.786-2.122h-1.5c0 .341-.163.765-.51 1.255-.34.48-.806.952-1.292 1.374l.983 1.132Zm2.319-3.76c0-1.41-.68-2.547-1.816-2.965-1.124-.414-2.42-.023-3.466 1.028l1.064 1.058c.755-.76 1.458-.835 1.884-.679.414.153.834.624.834 1.557h1.5Zm-7.181 3.76c.756.658 1.36 1.22 2.431 1.22v-1.5c-.424 0-.615-.129-1.448-.852l-.983 1.132Zm3.879-1.132c-.833.723-1.024.852-1.448.852v1.5c1.071 0 1.675-.562 2.431-1.22l-.983-1.132Z"
    />
  </svg>
)
export default Gallery
