<template>
<div class="sidebar" :style="{ width: sidebarWidth }">
    <div class="LogoPlusConverSationMain">
        <div class="T-GPTLogo">
            <img v-if="collapsed" src="../../assets/Image/favicon.png" alt="Trader Logo" />
            <img v-else src="../../assets/Image/TraderGTPLogo.png" alt="Trader Logo">
            <img src="../../assets/Image/SideBarToggleIcon.png" :class="{ 'rotate-180': collapsed }" @click="toggleSidebar" alt="SideBar Toggle" class="SideBarToggle">
        </div>
        <div class="Dv_ConverSation">
            <div class="ConverSationMain">
                <div class="ConverSation">
                    <img src="../../assets/Image/BoxIcon.png  " alt="">
                    <h1 class="bg-red-500 text-white p-4 text-center">Conversations (9)</h1>
                </div>
                <div class="PlusIcon">
                    <img src="../../assets/Image/PlusIcon.png" alt="">
                </div>
            </div>
            <div class="TabBarMain">
                <SelectButton v-model="value" :options="options" />
                <div class="SearchDv">
                    <img src="../../assets/Image/SearchIcon.png" alt="">
                </div>
            </div>
        </div>
        <!-- <SidebarLink to="/" icon="fas fa-home">Home</SidebarLink>
        <SidebarLink to="/dashboard" icon="fas fa-columns">Dashboard</SidebarLink>
        <SidebarLink to="/analytics" icon="fas fa-chart-bar">Analytics</SidebarLink>
        <SidebarLink to="/friends" icon="fas fa-users">Friends</SidebarLink>
        <SidebarLink to="/image" icon="fas fa-image">Images</SidebarLink> -->
    </div>
    <div class="MessagesDv_ContentMain">
        <router-link to="/dashboard">
            <div class="MessageDv" :class="{ active: selectedIndex === 0 }" @click="selectedIndex = 0">
                <div class="Noc-GeneratingDvMain">
                    <div class="CompanyDv">
                        <figure>
                            <img src="../../assets/Image/Apple_Logo_Icon.png" alt="Company Logo" />
                        </figure>
                        <p>$100</p>
                        <h6>
                            <img src="../../assets/Image/UpIcon.png" alt="Trend Icon" />
                            29%
                        </h6>
                    </div>
                    <div class="CompanyData_Entry">
                        <div class="CompanyName">
                            <div class="DocumentKey">
                                <h2><span>#</span>GOOG</h2>
                                <div class="dot"></div>
                                <p>Google Inc</p>
                            </div>
                            <div class="Count">
                                <h5>7</h5>
                            </div>
                        </div>

                        <div class="GrphMain">
                            <h6>Generating...</h6>
                            <img src="../../assets/Image/GraphMountain.png" alt="Graph" />
                        </div>

                        <div class="Dv_Of_ActionIconMain">
                            <div class="Dv_Of_ActionIcon">
                                <div class="flexD">
                                    <img src="../../assets/Image/Comment_Icon.png" alt="Comment Icon" />
                                    <p>27k</p>
                                </div>
                                <img src="../../assets/Image/Bell_Icon.png" alt="Bell Icon" />
                                <img src="../../assets/Image/Reload_Icon.png" alt="Reload Icon" />
                                <img src="../../assets/Image/Pin_Icon.png" alt="Pin Icon" />
                            </div>
                            <p>2m ago</p>
                        </div>
                    </div>
                </div>
            </div>

        </router-link>
        <router-link to="/image">
          <div class="MessageDv" :class="{ active: selectedIndex === 1 }" @click="selectedIndex = 1">
            <div class="Noc-GeneratingDvMain">
                <div class="CompanyDv">
                    <figure>
                        <img src="../../assets/Image/Apple_Logo_Icon.png" alt="Company Logo" />
                    </figure>
                    <p>$100</p>
                    <h6>
                        <img src="../../assets/Image/UpIcon.png" alt="Trend Icon" />
                        29%
                    </h6>
                </div>
                <div class="CompanyData_Entry">
                    <div class="CompanyName">
                        <div class="DocumentKey">
                            <h2><span>#</span>GOOG</h2>
                            <div class="dot"></div>
                            <p>Google Inc</p>
                        </div>
                        <div class="Count">
                            <h5>7</h5>
                        </div>
                    </div>

                    <div class="GrphMain">
                        <h6>Generating...</h6>
                        <img src="../../assets/Image/GraphMountain.png" alt="Graph" />
                    </div>

                    <div class="Dv_Of_ActionIconMain">
                        <div class="Dv_Of_ActionIcon">
                            <div class="flexD">
                                <img src="../../assets/Image/Comment_Icon.png" alt="Comment Icon" />
                                <p>27k</p>
                            </div>
                            <img src="../../assets/Image/Bell_Icon.png" alt="Bell Icon" />
                            <img src="../../assets/Image/Reload_Icon.png" alt="Reload Icon" />
                            <img src="../../assets/Image/Pin_Icon.png" alt="Pin Icon" />
                        </div>
                        <p>2m ago</p>
                    </div>
                </div>
            </div>
          </div>
        </router-link>
    </div>
</div>
</template>

<script>
import {
    ref
} from 'vue'
import SelectButton from 'primevue/selectbutton';
// import SidebarLink from './SidebarLink'
import {
    collapsed,
    toggleSidebar,
    sidebarWidth
} from './state'
export default {
    components: {
        // SidebarLink,
        SelectButton
    },
    setup() {
        const checked = ref(false)
        return {
            collapsed,
            toggleSidebar,
            sidebarWidth,
            checked
        }
    }
}
</script>
<script setup>
const value = ref('All')
const options = ['All', 'Stocks', 'Crypto', 'ETFs']
const selectedIndex = ref(null)
</script>
