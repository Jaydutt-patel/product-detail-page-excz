interface Props {
    color?: string;
    stroke?: string;
    height?: string;
    width?: string;
    className?: string;
}

export const Logo = (props: Props) => (
    <svg viewBox="0 0 48 48" width={props.width || "48"} height={props.height || "48"}>
        <path fill={props.color || "#f4511e"} d="M38.647,14.934l1.208,0.979l7.974-5.948l-2.392-3.206l-5.513,4.112	c-9.622-7.035-20.525-6.43-28.113,1.702c-2.596,2.782-4.166,6.212-4.597,9.872L7.2,22.44L0.189,42h23.592h0.168	c4.183-0.019,8.324-1.667,11.304-4.86c4.688-5.023,4.571-13.181-0.259-18.183c-2.513-2.603-5.767-4.091-8.936-4.091	c-0.021,0-0.043,0-0.064,0c-2.85,0.018-5.47,1.212-7.579,3.452c-3.282,3.487-3.209,9.575,0.155,13.028	c2.53,2.598,7.094,3.633,10.058,0.774c1.123-1.083,1.683-2.752,1.498-4.464c-0.183-1.693-1.045-3.131-2.364-3.942l-1.703-1.048	l-2.097,3.407l1.703,1.048c0.247,0.152,0.438,0.531,0.484,0.967c0.051,0.47-0.069,0.934-0.298,1.154	c-1.245,1.201-3.4,0.354-4.416-0.687c-1.873-1.922-1.926-5.565-0.108-7.496c1.359-1.444,2.938-2.182,4.691-2.193	c0.014,0,0.027,0,0.04,0c2.089,0,4.294,1.044,6.057,2.87c3.319,3.437,3.416,9.242,0.212,12.676	c-4.185,4.483-11.471,4.813-16.241,0.731c-3.003-2.57-4.775-6.081-4.988-9.887c-0.207-3.684,1.085-7.219,3.638-9.955	C21.205,8.37,30.368,8.229,38.647,14.934z M13.294,38H5.872l2.485-6.931C9.404,33.684,11.076,36.049,13.294,38z" />
    </svg>
);

export const Country = (props: Props) => (
    <svg viewBox="0 0 48 48" width={props.width || "48"} height={props.height || "48"}>
        <path fill="#ff6e00" d="M34 28c1.7 0 4.6-1.9 6-3.9 1.4-2.1 2.2-4.6 2-7.1-.2-3-.8-4 0-7 .3-1 1.3-2.3 2-3-4.7.5-8.2 2.8-9 6-1.6 2.8-5.8 14.1-8 15C29.4 28 32.2 28 34 28zM15 27.5c-1.7 0-4.6-1.9-6-3.9-1.4-2.1-2.1-4.6-2-7.1.2-3 .8-4 0-7-.3-1-1.3-2.3-2-3 4.7.5 8.2 2.8 9 6 1.6 2.8 5.8 14.1 8 15C19.6 27.5 16.8 27.5 15 27.5z" />
        <path fill="#ea5000" d="M27 28c1.9-.2 5.7-1.5 7-3s2-2.9 2-5c0-2.4-.5-4.7-.9-6-.6-2.5-1.1-3.2-1.1-4 0-.6.2-1.7.3-2.2C34.4 7.4 34.8 6.4 35 6c-4 0-6.7 4.7-7.5 6C28.9 17.5 28.1 22.5 27 28zM21 28c-1.9-.2-5.7-1.5-7-3s-2-2.9-2-5c0-2.4.5-4.7.9-6 .6-2.5 1.1-3.2 1.1-4 0-.6-.2-1.7-.3-2.2C13.6 7.4 13.2 6.4 13 6c4 0 6.7 4.7 7.5 6C19.1 17.5 19.9 22.5 21 28z" />
        <path fill="#ff6e00" d="M24,28.5c5.1,0,6.1-5.2,6.1-7.2c0-5.1-4.2-12.7-6.1-15.3c-2.1,2.9-6.1,10.3-6.1,15.3 C17.9,23.4,18.9,28.5,24,28.5z" />
        <path fill="#2d9037" d="M11 29c1 .5 4 4 8 2 0-.9 0-2.9 0-4-1-.2-5.1-.9-6.8-.6-1.4.3-2.5 1-3.2 2.6C9.5 28.8 10.4 28.7 11 29zM37 29.1c-1 .5-4 4-8 2 0-.9 0-2.9 0-4 1-.2 4.1-.9 5.8-.6 1.6.3 3.5.9 4.2 2.5C38.5 28.8 37.7 28.8 37 29.1zM23 43c-.2 0-.3 0-.5-.1-.5-.3-.7-.9-.4-1.4.6-1.1 1.1-6.2.9-9.4 0-.6.4-1 .9-1.1.5 0 1 .4 1.1.9.3 3.2-.2 8.9-1.1 10.6C23.7 42.8 23.4 43 23 43z" />
        <path fill="#2d9037" d="M29,43H18c-0.6,0-1-0.4-1-1s0.4-1,1-1h11c0.6,0,1,0.4,1,1S29.6,43,29,43z" />
        <path fill="#77b539" d="M24,36c0.6,0,0.7-0.4,1-1c0.6-1.3,3.2-2.6,4-4c1.2-1.2,0.9-2.6,0-4c0,0-3.8,1-5,1c-1.6,0-5-1-5-1 c-1.3,1.3-1.3,2.7,0,4c1.5,0.9,2.8,2.3,4,4C23.2,35.2,23.4,36,24,36z" />
    </svg>
);

export const Search = (props: Props) => (
    <svg viewBox="0 0 50 50" width={props.width || "50"} height={props.height || "50"} fill={props.color || "#9a9a9a"}>
        <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z" />
    </svg>);

export const Kakashi = (props: Props) => (
    <svg viewBox="0 0 48 48" width={props.width || "48"} height={props.height || "48"} >
        <path fill="#ffbca7" d="M13,26h-2.012C9.89,26,9,26.89,9,27.988l0,0c0,1.59,0.745,4.703,1.211,5.831 c0.539,1.306,0.848,2.12,1.453,2.651S13,37,13,37V26z" />
        <path fill="#ffad93" d="M12.125,34c0,0-1.125,0-1.125-2c0-3.5-1-4-1-4s3-0.375,3,4C13,34,12.125,34,12.125,34z" />
        <path fill="#ffbca7" d="M35,26h2.012C38.11,26,39,26.89,39,27.988l0,0c0,1.59-0.745,4.703-1.211,5.831 c-0.539,1.306-0.848,2.12-1.453,2.651S35,37,35,37V26z" />
        <path fill="#ffad93" d="M35,32c0-4.375,3-4,3-4s-1,0.5-1,4c0,2-1.125,2-1.125,2S35,34,35,32z" />
        <path fill="#ffdbd0" d="M24,17c-10.913,0-12,9-12,9s0,3,0,6s0.132,6,1.846,9c0.466,0.815,6.332,7,10.154,7 s9.688-6.185,10.154-7C35.868,38,36,35,36,32s0-6,0-6S34.913,17,24,17z" />
        <rect width="2" height="7" x="30" y="30" fill="#ffbca7" />
        <g> <path fill="#f5e9e8" d="M31,28c-3,0-4,2-4,2l1,1h2.423C33,31,34,30,34,29C34,29,33,28,31,28z" /> <circle cx="30.5" cy="29.5" r="1.5" fill="#bf360c" /> <path fill="#212121" d="M27,30c0,0,0.875-1,6.125-1H34l0,0c0-1.105-0.895-2-2-2l0,0C28,27,27,30,27,30z" /> <polygon fill="#bdbdbd" points="33,26 27,30 26,30 29,26" /></g>
        <g> <path fill="#f5e9e8" d="M17,28c3,0,4,2,4,2l-1,1h-2.423C15,31,14,30,14,29C14,29,15,28,17,28z" /> <circle cx="17.5" cy="29.5" r="1.5" fill="#212121" /> <path fill="#212121" d="M21,30c0,0-0.875-1-6.125-1H14l0,0c0-1.105,0.895-2,2-2l0,0C20,27,21,30,21,30z" /> <polygon fill="#bdbdbd" points="15,26 21,30 22,30 19,26" /></g>
        <g> <path fill="#455a64" d="M34,37c-4,0-7-5-10-5s-6,5-10,5h-1.616c0.262,1.333,0.7,2.667,1.462,4c0.466,0.815,6.332,7,10.154,7 s9.688-6.185,10.154-7c0.762-1.333,1.204-2.667,1.466-4H34z" /> <path fill="#37474f" d="M23,37v-3l-1,3c0,0,1,2,2,2s2-2,2-2H23z" /></g>
        <g> <path fill="#113669" d="M11,17c-0.552,0-1,0.448-1,1v8c0,0.55,0.45,1,1,1h26c0.5,0,1-0.542,1-1v-8c0-0.552-0.448-1-1-1H11z" /> <path fill="#b2b2bc" d="M32,25H17c-0.552,0-1-0.448-1-1v-4c0-0.552,0.448-1,1-1h15c0.552,0,1,0.448,1,1v4 C33,24.552,32.552,25,32,25z" /> <path fill="#6c6c76" d="M27.621,20.379c-0.195-0.195-0.512-0.195-0.707,0l-0.371,0.371 c-0.322-0.297-0.837-0.625-1.543-0.625c-1.069,0-1.936,0.844-1.99,1.9l-0.908,1.188C21.855,23.535,22.085,24,22.491,24h2.384 c0.903,0,1.375-0.566,1.375-1.125c0-0.637-0.46-0.875-0.75-0.875c-0.276,0-0.5,0.224-0.5,0.5c0,0.079,0.022,0.151,0.055,0.218 c0.01,0.021,0.025,0.037,0.038,0.056c0.029,0.043,0.061,0.08,0.101,0.112c0.01,0.008,0.015,0.021,0.025,0.028 C25.17,22.954,25.063,23,24.875,23C24.327,23,24,22.673,24,22.125c0-0.551,0.449-1,1-1c0.695,0,1.076,0.594,1.089,0.616 c0.08,0.132,0.215,0.219,0.368,0.238c0.156,0.021,0.306-0.034,0.414-0.143l0.75-0.75C27.816,20.891,27.816,20.574,27.621,20.379z" /></g>
        <g> <path fill="#e0e0e0" d="M11,17H7c0,0,1.125-1,3-1c-1.125-0.625-2.362-1.817-3-4c1.23,1.57,4,2,4,2s-2-2-2-7c0.5,2,3,4,3,4 s0-5.5,5-9c-1,3-1,5-1,5s4-6,12-7c-3.5,2-5,6-5,6s2-3,6-4c-0.625,1-1,2-1,2s4-3,9-4c-2,1.5-3,3-3,3s9-0.18,12-3c-1,5-3.5,10-6,12 c4.719-1.263,7-3,7-3s-2,4.375-7,6.98c1.25,0.77,4.999,1.02,4.999,1.02s-1.97,2-3.999,2h-1c0.875,1.25,2.999,2,2.999,2 s-2.902,0-4.902-2L39,20l1,4c-3.5-4-7-7-7-7s1,1,1,5.125C32,18.5,30,17,30,17s1,1.737,1,3c-0.5-1-4-3-4-3S19.874,17,11,17z" /> <path fill="#bdbdbd" d="M41,19c2.029,0,4-2,4-2s-2.298,1-5,1c-2.375,0-4-1-4-1c1.625,2,4,7,4,7s0-2.5-0.875-4 C41,21,43,21,43,21L41,19z" /> <path fill="#bdbdbd" d="M35,13c2.875-0.25,5-1,5-1c2.5-2,5-7,6-12C46,0,44,7,35,13z" /> <path fill="#bdbdbd" d="M37,15.5c1.25,0.5,3,0.5,3,0.5v-0.02C45,13.375,47,9,47,9S43,13.375,37,15.5z" /> <path fill="#bdbdbd" d="M24,17c-0.875-1.25-1-3-1-3s-0.875,0.75-1,2c-0.625-1.875-0.5-4-0.5-4s-0.875,0.75-1.5,2 c0-3.125,2-6,2-6s-3.5,1-5,4c0-5,3-8.876,3-8.876C17.339,5.005,16,7,16,7s-1.5,2-1.75,4c0,0-0.25-1-0.25-2c0-4,1-5.222,1-5.222 C12.012,7.1,12,11,12,11S9.5,9,9,7c0,5,2,7,2,7s-2.77-0.43-4-2c0.638,2.183,1.875,3.375,3,4c-1.875,0-3,1-3,1H24z" /> <path fill="#bdbdbd" d="M24,17c0,0,0.5-5.5,6-8.125c0,0-4,3.125-4,8.125" /> <polygon fill="#bdbdbd" points="11,27 12,32 13,27" /> <polygon fill="#bdbdbd" points="37,27 36,32 35,27" /></g>
    </svg>
);

export const Bag = (props: Props) => (
    <svg viewBox="0 0 511 511" width={props.width || "40"} height={props.height || "40"} fill={props.color || "#9a9a9a"}>
        <path d="M445.663,469.921l-14.362-359.041C430.968,102.537,424.165,96,415.814,96H351v-0.5C351,42.841,308.159,0,255.5,0
	S160,42.841,160,95.5V96H95.187c-8.351,0-15.153,6.536-15.488,14.88L65.337,469.921c-0.434,10.842,3.468,21.122,10.985,28.946
	C83.84,506.691,93.956,511,104.806,511h301.389c10.851,0,20.966-4.309,28.484-12.133
	C442.195,491.042,446.097,480.763,445.663,469.921z M175,95.5c0-44.388,36.112-80.5,80.5-80.5S336,51.112,336,95.5V96H175V95.5z
	 M423.862,488.474c-4.663,4.853-10.938,7.526-17.667,7.526H104.806c-6.73,0-13.004-2.672-17.667-7.525
	c-4.663-4.853-7.083-11.229-6.813-17.954L94.687,111.48c0.011-0.27,0.23-0.48,0.5-0.48H160v48.5c0,4.142,3.358,7.5,7.5,7.5
	s7.5-3.358,7.5-7.5V111h161v48.5c0,4.142,3.358,7.5,7.5,7.5s7.5-3.358,7.5-7.5V111h64.814c0.269,0,0.488,0.21,0.499,0.48
	l14.362,359.041C430.944,477.245,428.524,483.621,423.862,488.474z"
        />
    </svg>);

export const Hamburger = (props: Props) => (
    <svg className={props.className || ''} stroke='currentColor' viewBox='0 0 24 24'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
    </svg>);

export const Globe = (props: Props) => (
    <svg width={props.width || "48"} height={props.height || "48"} fill="none" viewBox="0 0 48 48" >
        <rect width="48" height="48" />
        <path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" stroke={props.color || "black"} strokeWidth="4" />
        <path d="M4 20.8404C7.01485 19.4168 9.24466 19.2185 10.6894 20.2454C12.8566 21.7859 13.1283 28.064 18.0575 25.0635C22.9867 22.063 15.9467 20.8404 17.475 16.4939C19.0033 12.1474 24.0083 15.5237 24.5059 10.7627C24.8375 7.58862 21.0408 6.37413 13.1156 7.11921" stroke={props.color || "black"} strokeWidth="4" />
        <path d="M36.0001 8C30.2857 12.9886 28.2899 16.0011 30.0127 17.0373C32.5968 18.5917 33.6933 16.4033 36.8467 17.0373C40.0001 17.6714 39.3173 21.9457 37.6587 21.9457C36.0001 21.9457 27.41 20.8518 27.8427 25.865C28.2753 30.8781 33.4422 31.6203 33.4422 34.4211C33.4422 36.2883 32.299 39.146 30.0127 42.9942" stroke={props.color || "black"} strokeWidth="4" strokeLinecap="round" />
        <path d="M6.10461 32.9264C7.0161 32.5288 7.70127 32.2374 8.16011 32.052C12.0072 30.4978 14.8618 30.1314 16.7237 30.953C20.0162 32.4059 18.7504 35.3401 19.7817 36.4211C20.8129 37.5021 23.3881 37.1876 23.3881 39.244C23.3881 40.615 22.9276 42.1637 22.0066 43.8901" stroke={props.color || "black"} strokeWidth="4" strokeLinecap="round" />
    </svg>
);

export const Dollar = (props: Props) => (
    <svg viewBox="0 0 199.027 199.027" width={props.width || "48"} height={props.height || "48"}>
        <g><g><g><path fill="#010002" d="M99.514,0.009C44.657,0.009,0,44.648,0,99.522c0,54.853,44.657,99.496,99.514,99.496
				c54.871,0,99.514-44.643,99.514-99.496C199.027,44.648,154.384,0.009,99.514,0.009z M99.514,189.43
				c-49.581,0-89.926-40.33-89.926-89.911S49.932,9.593,99.514,9.593s89.926,40.344,89.926,89.926S149.095,189.43,99.514,189.43z"/>
        </g><g><path fill="#010002" d="M104.288,92.54c-13.199-5.604-17.823-9.538-17.823-17.264c0-6.202,3.418-13.184,15.092-13.184
				c9.699,0,15.901,3.5,19.086,5.307l3.783-9.999c-4.549-2.57-10.747-5.007-19.684-5.29V37.383H95.19v15.156
				c-13.796,2.29-22.719,11.825-22.719,24.393c0,13.184,9.552,20.296,24.988,26.365c11.227,4.545,16.169,9.702,16.151,18.027
				c0.018,8.654-6.302,14.856-17.046,14.856c-8.493,0-16.384-3.021-21.674-6.499l-3.633,10.132
				c5.29,3.783,14.244,6.517,23.016,6.682v15.139h9.552v-15.751c15.6-2.423,23.943-13.646,23.943-25.753
				C127.772,106.652,119.892,98.921,104.288,92.54z"/>
            </g></g></g>
    </svg>
);
