<template>
  <div class="bg-gray-400 min-h-screen">
    <div class="flex justify-between py-10 items-center px-4 md:px-8 lg:px-12">
      <div class="title-dashboard">
        <p class="text-2xl lg:text-3xl font-bold">
          QARPA
        </p>
      </div>
      <div
        class="icon grid justify-items-center grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
      >
        <div
          class="icon-profile col-span-2 md:col-span-3 lg:col-span-4 border shadow-md rounded-lg p-2 grid justify-items-center grid-cols-2 md:grid-cols-4 lg:grid-cols-5 items-center"
        >
          <svg
            width="32"
            height="33"
            viewBox="0 0 32 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_314_215)">
              <rect y="0.5" width="32" height="32" rx="16" fill="white" />
              <rect
                x="1"
                y="21.5"
                width="30"
                height="30"
                rx="15"
                stroke="#333333"
                stroke-width="2"
              />
              <rect
                x="9.66663"
                y="8.16675"
                width="12.6667"
                height="12.6667"
                rx="6.33333"
                stroke="#333333"
                stroke-width="2"
              />
            </g>
            <rect
              x="1"
              y="1.5"
              width="30"
              height="30"
              rx="15"
              stroke="#333333"
              stroke-width="2"
            />
            <defs>
              <clipPath id="clip0_314_215">
                <rect y="0.5" width="32" height="32" rx="16" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <div
            class="icon-profile-text hidden md:block md:col-span-2 lg:col-span-3"
          >
            <p>Hi, Owner</p>
            <p>Owner</p>
          </div>
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 9.66994C16.8126 9.48369 16.5592 9.37915 16.295 9.37915C16.0308 9.37915 15.7774 9.48369 15.59 9.66994L12 13.2099L8.46001 9.66994C8.27265 9.48369 8.0192 9.37915 7.75501 9.37915C7.49082 9.37915 7.23737 9.48369 7.05001 9.66994C6.95628 9.76291 6.88189 9.87351 6.83112 9.99537C6.78035 10.1172 6.75421 10.2479 6.75421 10.3799C6.75421 10.512 6.78035 10.6427 6.83112 10.7645C6.88189 10.8864 6.95628 10.997 7.05001 11.0899L11.29 15.3299C11.383 15.4237 11.4936 15.4981 11.6154 15.5488C11.7373 15.5996 11.868 15.6257 12 15.6257C12.132 15.6257 12.2627 15.5996 12.3846 15.5488C12.5064 15.4981 12.617 15.4237 12.71 15.3299L17 11.0899C17.0937 10.997 17.1681 10.8864 17.2189 10.7645C17.2697 10.6427 17.2958 10.512 17.2958 10.3799C17.2958 10.2479 17.2697 10.1172 17.2189 9.99537C17.1681 9.87351 17.0937 9.76291 17 9.66994Z"
              fill="black"
            />
          </svg>
        </div>
        <div
          class="icon-notif border shadow-md rounded-lg p-2 ml-2 flex justify-center items-center"
        >
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 13.68V10.5C17.9986 9.08312 17.4958 7.71247 16.5806 6.63077C15.6655 5.54908 14.3971 4.82615 13 4.59V3.5C13 3.23478 12.8946 2.98043 12.7071 2.79289C12.5196 2.60536 12.2652 2.5 12 2.5C11.7348 2.5 11.4804 2.60536 11.2929 2.79289C11.1054 2.98043 11 3.23478 11 3.5V4.59C9.60294 4.82615 8.33452 5.54908 7.41939 6.63077C6.50425 7.71247 6.00144 9.08312 6 10.5V13.68C5.41645 13.8863 4.911 14.2681 4.55294 14.7729C4.19488 15.2778 4.00174 15.8811 4 16.5V18.5C4 18.7652 4.10536 19.0196 4.29289 19.2071C4.48043 19.3946 4.73478 19.5 5 19.5H8.14C8.37028 20.3474 8.873 21.0954 9.5706 21.6287C10.2682 22.1621 11.1219 22.451 12 22.451C12.8781 22.451 13.7318 22.1621 14.4294 21.6287C15.127 21.0954 15.6297 20.3474 15.86 19.5H19C19.2652 19.5 19.5196 19.3946 19.7071 19.2071C19.8946 19.0196 20 18.7652 20 18.5V16.5C19.9983 15.8811 19.8051 15.2778 19.4471 14.7729C19.089 14.2681 18.5835 13.8863 18 13.68ZM8 10.5C8 9.43913 8.42143 8.42172 9.17157 7.67157C9.92172 6.92143 10.9391 6.5 12 6.5C13.0609 6.5 14.0783 6.92143 14.8284 7.67157C15.5786 8.42172 16 9.43913 16 10.5V13.5H8V10.5ZM12 20.5C11.651 20.4979 11.3086 20.4045 11.0068 20.2291C10.7051 20.0536 10.4545 19.8023 10.28 19.5H13.72C13.5455 19.8023 13.2949 20.0536 12.9932 20.2291C12.6914 20.4045 12.349 20.4979 12 20.5ZM18 17.5H6V16.5C6 16.2348 6.10536 15.9804 6.29289 15.7929C6.48043 15.6054 6.73478 15.5 7 15.5H17C17.2652 15.5 17.5196 15.6054 17.7071 15.7929C17.8946 15.9804 18 16.2348 18 16.5V17.5Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
    </div>
    <div class="container mx-auto max-w-lg md:max-w-2xl lg:max-w-4xl">
      <div
        class="grid justify-items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-center"
      >
        <IconMenu
          v-for="item in itemMenu"
          :key="item"
          class="w-36 md:w-44"
          :item="item"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      itemMenu: [
        'Point of Sales',
        'Work Order Management',
        'Attendace',
        'Timeoff',
        'Inventory'
      ]
    }
  }
}
</script>

<style></style>
