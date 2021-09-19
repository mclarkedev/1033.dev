import React from 'react';

interface IPhoneXProps {
  width?: number | string;
  height?: number | string;
}

const base = '55vh';

export const IPhoneXWithGif = ({ height = '55vh' }) => {
  return (
    <div
      style={{
        height,
        borderRadius: '50px',
        alignSelf: 'center',
      }}
    >
      <img
        src="/imgs/arthur.gif"
        height={height}
        style={{
          height,
          padding: 16,
          zIndex: 99,
          left: 0,
          boxSizing: 'border-box',
          borderRadius: '40px',
        }}
      />
      <div style={{ position: 'relative', zIndex: 0 }}>
        <IPhoneX height={height} />
      </div>
    </div>
  );
};

export default function IPhoneX({ height = base }: IPhoneXProps) {
  return (
    <div
      style={{
        height,
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center',
        zIndex: 0,
      }}
    >
      <svg
        // width="360"
        height={height}
        viewBox="0 0 360 722"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M358.434 54.7559C358.434 24.9325 334.258 0.755859 304.434 0.755859H55.7852C25.9618 0.755859 1.78516 24.9325 1.78516 54.7558V667.494C1.78516 697.317 25.9617 721.494 55.7851 721.494H304.434C334.258 721.494 358.434 697.317 358.434 667.494V54.7559ZM25.2715 54.9344C25.2715 37.1974 39.4425 22.9182 57.0452 22.9182H88.1262C89.5339 22.9183 90.8838 23.4818 91.8791 24.4848C92.8745 25.4877 93.4337 26.8479 93.4338 28.2663V30.7288C93.4338 40.3654 101.132 48.1241 110.695 48.1241H249.524C259.087 48.1241 266.785 40.3654 266.785 30.7288V28.2663C266.786 26.8479 267.345 25.4877 268.34 24.4848C269.335 23.4818 270.685 22.9183 272.093 22.9182H303.174C320.777 22.9182 334.948 37.1974 334.948 54.9344V667.058C334.948 684.795 320.777 699.074 303.174 699.074H57.0452C39.4425 699.074 25.2715 684.795 25.2715 667.058V54.9344Z"
          fill="black"
        />
        <path
          d="M358.295 167.08C359.239 167.08 360 167.839 360 168.783V247.944C360 248.888 359.239 249.649 358.295 249.649H345.164C344.22 249.649 343.459 248.888 343.459 247.944V168.783C343.459 167.839 344.22 167.08 345.164 167.08H358.295Z"
          fill="black"
        />
        <g filter="url(#filter0_f)">
          <path
            d="M357.932 168.6C358.774 168.6 359.451 169.277 359.451 170.119V246.608C359.451 247.45 358.774 248.128 357.932 248.128H357.459V168.6H357.932Z"
            fill="url(#paint0_linear)"
          />
        </g>
        <path
          d="M14.8366 97.7266H1.70463C0.76319 97.7266 0 98.4898 0 99.4312V124.054C0 124.995 0.76319 125.758 1.70463 125.758H14.8366C15.7781 125.758 16.5412 124.995 16.5412 124.054V99.4312C16.5412 98.4898 15.7781 97.7266 14.8366 97.7266Z"
          fill="black"
        />
        <g filter="url(#filter1_f)">
          <path
            d="M2.06835 99.248C1.22646 99.248 0.548828 99.9257 0.548828 100.768V122.719C0.548828 123.561 1.22646 124.238 2.06835 124.238H2.54101V99.248H2.06835Z"
            fill="url(#paint1_linear)"
          />
        </g>
        <path
          d="M1.70508 150.002C0.760712 150.002 0 150.761 0 151.705V200.509C0 201.453 0.760712 202.214 1.70508 202.214H14.8359C15.7803 202.214 16.541 201.453 16.541 200.509V151.705C16.541 150.761 15.7803 150.002 14.8359 150.002H1.70508Z"
          fill="black"
        />
        <g filter="url(#filter2_f)">
          <path
            d="M2.06836 151.521C1.22646 151.521 0.548828 152.199 0.548828 153.041V199.173C0.548828 200.015 1.22646 200.692 2.06836 200.692H2.54101V151.521H2.06836Z"
            fill="url(#paint2_linear)"
          />
        </g>
        <path
          d="M1.70508 215.662C0.760712 215.662 0 216.421 0 217.365V266.169C0 267.113 0.760712 267.874 1.70508 267.874H14.8359C15.7803 267.874 16.541 267.113 16.541 266.169V217.365C16.541 216.421 15.7803 215.662 14.8359 215.662H1.70508Z"
          fill="black"
        />
        <g filter="url(#filter3_f)">
          <path
            d="M2.06836 217.182C1.22646 217.182 0.548828 217.859 0.548828 218.701V264.833C0.548828 265.675 1.22646 266.352 2.06836 266.352H2.54101V217.182H2.06836Z"
            fill="url(#paint3_linear)"
          />
        </g>
        <path
          d="M3.16211 74.9336H7.32809V70.0098H3.16211V74.9336Z"
          fill="#7D7E7F"
        />
        <path
          d="M3.16211 647.058H7.32809V74.9336H3.16211V647.058Z"
          fill="#EBEBEB"
        />
        <path
          d="M3.16211 651.984H7.32809V647.059H3.16211V651.984Z"
          fill="#7D7E7F"
        />
        <path
          d="M356.838 651.984H352.672V668.461C352.672 695.043 331.272 716.443 304.689 716.443H55.3105C28.7284 716.443 7.32809 695.043 7.32809 668.461V651.984H3.16211V666.281C3.16211 695.96 27.0558 719.854 56.7343 719.854H303.266C332.944 719.854 356.838 695.96 356.838 666.281V651.984Z"
          fill="#EBEBEB"
        />
        <path
          d="M356.838 647.059H352.672V651.984H356.838V647.059Z"
          fill="#7D7E7F"
        />
        <path
          d="M356.838 74.9336H352.672V647.058H356.838V74.9336Z"
          fill="#EBEBEB"
        />
        <path
          d="M356.838 70.0098H352.672V74.9336H356.838V70.0098Z"
          fill="#7D7E7F"
        />
        <path
          d="M56.7343 2.26562C27.0558 2.26562 3.16211 26.1593 3.16211 55.8379V70.0098H7.32809V54.2246C7.32809 27.6424 28.7284 6.24414 55.3105 6.24414H304.689C331.272 6.24414 352.672 27.6424 352.672 54.2246V70.0098H356.838V55.8379C356.838 26.1593 332.944 2.26562 303.266 2.26562H56.7343Z"
          fill="#EBEBEB"
        />
        <path
          d="M325.152 15.3634C323.977 15.247 324.532 16.418 327.167 18.8594C335.864 26.9146 341.263 38.5735 341.263 51.5509V361.123V670.695C341.263 683.673 335.864 695.332 327.167 703.387C324.532 705.828 323.977 706.999 325.152 706.883C325.856 706.813 327.184 706.28 329.056 705.281C341.765 698.501 349.146 683.873 349.146 668.336V361.123V53.9102C349.146 38.3734 341.765 23.7453 329.056 16.9649C327.184 15.9662 325.856 15.4331 325.152 15.3634V15.3634Z"
          fill="url(#paint4_linear)"
        />
        <path
          d="M34.8477 15.3634C36.0222 15.2471 35.4678 16.418 32.832 18.8594C24.1358 26.9146 18.7363 38.5735 18.7363 51.5508V361.123V670.695C18.7363 683.673 24.1358 695.332 32.832 703.387C35.4678 705.828 36.0222 706.999 34.8477 706.883C34.1429 706.813 32.8155 706.28 30.9434 705.281C18.2339 698.501 10.8535 683.873 10.8535 668.336V361.123V53.9102C10.8535 38.3734 18.2339 23.7453 30.9434 16.9649C32.8155 15.9662 34.1429 15.4331 34.8477 15.3634Z"
          fill="url(#paint5_linear)"
        />
        <path
          d="M199.061 27.4473H161.561C160.057 27.4473 158.838 28.6665 158.838 30.1705C158.838 31.6745 160.057 32.8937 161.561 32.8937H199.061C200.565 32.8937 201.784 31.6745 201.784 30.1705C201.784 28.6665 200.565 27.4473 199.061 27.4473Z"
          fill="#1E1E1E"
        />
        <path
          d="M218.891 34.9029C221.698 34.9029 223.973 32.6275 223.973 29.8206C223.973 27.0137 221.698 24.7383 218.891 24.7383C216.084 24.7383 213.809 27.0137 213.809 29.8206C213.809 32.6275 216.084 34.9029 218.891 34.9029Z"
          fill="#2B2B2B"
        />
        <path
          d="M218.891 33.8924C221.14 33.8924 222.963 32.0692 222.963 29.8202C222.963 27.5712 221.14 25.748 218.891 25.748C216.642 25.748 214.818 27.5712 214.818 29.8202C214.818 32.0692 216.642 33.8924 218.891 33.8924Z"
          fill="#0A0D13"
        />
        <path
          d="M218.89 32.9222C220.603 32.9222 221.992 31.533 221.992 29.8195C221.992 28.1059 220.603 26.7168 218.89 26.7168C217.176 26.7168 215.787 28.1059 215.787 29.8195C215.787 31.533 217.176 32.9222 218.89 32.9222Z"
          fill="#091427"
        />
        <g filter="url(#filter4_f)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M216.754 27.7441C216.386 27.7829 215.863 28.3444 215.824 29.4482C215.786 30.552 216.27 31.1523 216.541 31.1523C216.812 31.1523 217.935 29.545 216.754 27.7441H216.754Z"
            fill="#235A91"
            fillOpacity="0.556075"
          />
        </g>
        <g filter="url(#filter5_f)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M219.397 27.3578C218.817 27.5364 218.705 28.4739 218.727 29.0096C218.75 29.5453 219.508 30.9516 220.424 30.6391C221.339 30.3266 221.495 29.1659 221.116 28.3846C220.736 27.6034 220.044 27.0453 219.397 27.3578Z"
            fill="#235A91"
            fillOpacity="0.556075"
          />
        </g>
        <path
          d="M152.091 30.2885C152.091 31.3456 151.672 32.3597 150.926 33.1086C150.179 33.8575 149.167 34.2801 148.11 34.284C147.053 34.2879 146.037 33.8727 145.286 33.1293C144.534 32.386 144.107 31.375 144.1 30.3179C144.092 29.2608 144.503 28.2437 145.244 27.4893C145.985 26.735 146.994 26.3049 148.051 26.2932C149.108 26.2815 150.127 26.6893 150.884 27.4271C151.641 28.1649 152.075 29.1727 152.09 30.2297L148.095 30.2885H152.091Z"
          fill="#0F0F0F"
        />
        <path
          d="M129.432 30.3824C129.432 31.9516 128.801 33.457 127.675 34.5686C126.55 35.6803 125.022 36.3077 123.428 36.3135C121.833 36.3193 120.301 35.7029 119.168 34.5994C118.034 33.4959 117.391 31.9952 117.379 30.426C117.367 28.8568 117.988 27.3469 119.105 26.2271C120.222 25.1073 121.745 24.4689 123.339 24.4515C124.934 24.4342 126.47 25.0395 127.612 26.1347C128.754 27.23 129.408 28.726 129.432 30.2951L123.406 30.3824H129.432Z"
          fill="#101010"
        />
        <path
          d="M55.2715 9.74219C46.584 9.74219 38.5024 12.2269 31.6797 16.5156V22.2031C38.1819 17.9381 45.9665 15.4551 54.3574 15.4551H154.182H206.322H306.146C314.537 15.4551 322.322 17.9381 328.824 22.2031V16.5156C322.001 12.2269 313.92 9.74219 305.232 9.74219H206.322H154.182H55.2715Z"
          fill="url(#paint6_linear)"
        />
        <path
          d="M55.2715 712.002C46.584 712.002 38.5024 709.517 31.6797 705.229V699.541C38.1819 703.806 45.9665 706.289 54.3574 706.289H154.182H206.322H306.146C314.537 706.289 322.322 703.806 328.824 699.541V705.229C322.001 709.517 313.92 712.002 305.232 712.002H206.322H154.182H55.2715Z"
          fill="url(#paint7_linear)"
        />
        <path
          d="M250.953 29.7425C250.953 31.852 250.108 33.8756 248.602 35.3699C247.097 36.8643 245.054 37.7077 242.921 37.7155C240.788 37.7233 238.739 36.8947 237.223 35.4113C235.706 33.928 234.846 31.9107 234.83 29.8012C234.815 27.6918 235.645 25.6622 237.139 24.1569C238.633 22.6516 240.67 21.7933 242.802 21.77C244.935 21.7467 246.99 22.5603 248.518 24.0326C250.045 25.5049 250.921 27.5159 250.952 29.6252L242.891 29.7425H250.953Z"
          fill="#0F0F0F"
        />
        <defs>
          <filter
            id="filter0_f"
            x="356.919"
            y="168.06"
            width="3.07148"
            height="80.6072"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="0.269824"
              result="effect1_foregroundBlur"
            />
          </filter>
          <filter
            id="filter1_f"
            x="0.00917989"
            y="98.7084"
            width="3.07148"
            height="26.0695"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="0.269824"
              result="effect1_foregroundBlur"
            />
          </filter>
          <filter
            id="filter2_f"
            x="0.00917989"
            y="150.982"
            width="3.07148"
            height="50.25"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="0.269824"
              result="effect1_foregroundBlur"
            />
          </filter>
          <filter
            id="filter3_f"
            x="0.00917989"
            y="216.642"
            width="3.07148"
            height="50.25"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="0.269824"
              result="effect1_foregroundBlur"
            />
          </filter>
          <filter
            id="filter4_f"
            x="215.588"
            y="27.5099"
            width="1.93011"
            height="3.87653"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="0.117104"
              result="effect1_foregroundBlur"
            />
          </filter>
          <filter
            id="filter5_f"
            x="218.49"
            y="27.0353"
            width="3.05207"
            height="3.88277"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="0.117104"
              result="effect1_foregroundBlur"
            />
          </filter>
          <linearGradient
            id="paint0_linear"
            x1="357.459"
            y1="168.6"
            x2="357.459"
            y2="248.128"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#CBCBCB" stopOpacity="0.27451" />
            <stop offset="0.04" stopColor="#CBCBCB" />
            <stop offset="0.96" stopColor="#CBCBCB" />
            <stop offset="1" stopColor="#CBCBCB" stopOpacity="0.275701" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="2.54101"
            y1="99.2481"
            x2="2.54101"
            y2="124.238"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#CBCBCB" stopOpacity="0.27451" />
            <stop offset="0.05" stopColor="#CBCBCB" />
            <stop offset="0.95" stopColor="#CBCBCB" />
            <stop offset="1" stopColor="#CBCBCB" stopOpacity="0.275701" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="2.54101"
            y1="151.521"
            x2="2.54101"
            y2="200.692"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#CBCBCB" stopOpacity="0.27451" />
            <stop offset="0.05" stopColor="#CBCBCB" />
            <stop offset="0.95" stopColor="#CBCBCB" />
            <stop offset="1" stopColor="#CBCBCB" stopOpacity="0.275701" />
          </linearGradient>
          <linearGradient
            id="paint3_linear"
            x1="2.54101"
            y1="217.182"
            x2="2.54101"
            y2="266.352"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#CBCBCB" stopOpacity="0.27451" />
            <stop offset="0.05" stopColor="#CBCBCB" />
            <stop offset="0.95" stopColor="#CBCBCB" />
            <stop offset="1" stopColor="#CBCBCB" stopOpacity="0.275701" />
          </linearGradient>
          <linearGradient
            id="paint4_linear"
            x1="340.224"
            y1="361.123"
            x2="349.146"
            y2="361.123"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#404040" />
            <stop offset="0.6" stopColor="#838383" />
            <stop offset="1" stopColor="#A7A7A7" />
          </linearGradient>
          <linearGradient
            id="paint5_linear"
            x1="19.7756"
            y1="361.123"
            x2="10.8535"
            y2="361.123"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#404040" />
            <stop offset="0.6" stopColor="#838383" />
            <stop offset="1" stopColor="#A7A7A7" />
          </linearGradient>
          <linearGradient
            id="paint6_linear"
            x1="31.6797"
            y1="22.2031"
            x2="328.824"
            y2="22.2031"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4F4F4F" stopOpacity="0.130841" />
            <stop offset="0.07" stopColor="#4F4F4F" />
            <stop offset="0.937" stopColor="#4F4F4F" stopOpacity="0.953271" />
            <stop offset="1" stopColor="#4F4F4F" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint7_linear"
            x1="31.6797"
            y1="699.541"
            x2="328.824"
            y2="699.541"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4F4F4F" stopOpacity="0.130841" />
            <stop offset="0.07" stopColor="#4F4F4F" />
            <stop offset="0.937" stopColor="#4F4F4F" stopOpacity="0.953271" />
            <stop offset="1" stopColor="#4F4F4F" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
