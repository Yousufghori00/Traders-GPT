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
        </div>
        <div class="TabBarMain">
           <SelectButton v-model="value" :options="options" />
            <!-- <ToggleGroupRoot v-model="toggleStateSingle" type="single" class="flex">
                <ToggleGroupItem @click="goToMainPage" value="left" aria-label="Toggle italic" id="Tab" :class="toggleGroupItemClasses">
                    All
                </ToggleGroupItem>
                <ToggleGroupItem value="center" aria-label="Toggle italic" id="Tab" :class="toggleGroupItemClasses">
                    Stocks
                </ToggleGroupItem>
                <ToggleGroupItem value="right" aria-label="Toggle italic" id="Tab" :class="toggleGroupItemClasses">
                    Crypto
                </ToggleGroupItem>
                <ToggleGroupItem value="right" aria-label="Toggle italic" id="Tab" :class="toggleGroupItemClasses">
                    ETFs
                </ToggleGroupItem>
            </ToggleGroupRoot>
            <div class="SearchDv">
                <img :src="searchIcon" alt="">
            </div> -->
        </div>
        <!-- <SidebarLink to="/" icon="fas fa-home">Home</SidebarLink>
        <SidebarLink to="/dashboard" icon="fas fa-columns">Dashboard</SidebarLink>
        <SidebarLink to="/analytics" icon="fas fa-chart-bar">Analytics</SidebarLink>
        <SidebarLink to="/friends" icon="fas fa-users">Friends</SidebarLink>
        <SidebarLink to="/image" icon="fas fa-image">Images</SidebarLink> -->
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
const value = ref('All');
const options = ref(['All', 'Stocks', 'Crypto', 'ETFs']);
const toggleGroupItemClasses = 'hover:text-white focus:bg-[#2A5391] focus:text-white'
</script>
<style>
:root {
    --sidebar-bg-color: #2f855a;
    --sidebar-item-hover: #38a169;
    --sidebar-item-active: #276749;
}
</style>
<style scoped>
@import url('./SideBar.scss');

.sidebar {
    color: white;
    background-color: var(--sidebar-bg-color);

    float: left;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    bottom: 0;
    padding: 0.5em;

    transition: 0.3s ease;

    display: flex;
    flex-direction: column;
}

.sidebar h1 {
    height: 2.5em;
}

.collapse-icon {
    position: absolute;
    bottom: 0;
    padding: 0.75em;

    color: rgba(255, 255, 255, 0.7);

    transition: 0.2s linear;
}

.rotate-180 {
    transform: rotate(180deg);
    transition: 0.2s linear;
}
::v-deep(.p-selectbutton .p-button.p-highlight) {
  background-color: #2A5391 !important;
  color: white !important;
}
</style>
