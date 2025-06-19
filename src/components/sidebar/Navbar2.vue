<template>
<div class="navbar">
    <div class="NavbarContentDv">
        <div class="NavbarContentDvOne">
            <div class="CompanyDv">
                <div class="CompanyName">
                    <div class="DocumentKey">
                        <h2><span>#</span>Netfilx</h2>
                    </div>
                </div>
            </div>
            <div class="AleartsDv">
                <div class="Icon_Plus_ToggleDV">
                    <img src="../../assets/Image/Reload_Icon.png" alt="">
                    <p>Updates</p>
                    <label class="switch">
                        <input type="checkbox">
                        <span class="slider"></span>
                    </label>
                </div>
                <div class="Icon_Plus_ToggleDV">
                    <img src="../../assets/Image/Pin_Icon.png" alt="">
                    <p>Alerts</p>
                    <label class="switch">
                        <input type="checkbox">
                        <span class="slider"></span>
                    </label>
                </div>
                <img style="width: 20px; height: 20px;" src="../../assets/Image/setting.svg" alt="">
            </div>
        </div>
        <div class="NavbarContentDvTwo">
            <div class="TabsBtn">
                <SelectButton v-model="value" :options="options" />
            </div>
            <div class="ProfileDvMain">
                <img src="../../assets/Image/profilePic copy.jpg" alt="">
                <img class="settingImg" src="../../assets/Image/setting.svg" alt="">
            </div>
        </div>

    </div>
</div>
</template>

<script>
import {
    ref
} from 'vue'
import SelectButton from 'primevue/selectbutton';
export default {
    components: {
        SelectButton,
    },
    setup() {
        const checked = ref(false)
        return {
            checked
        }
    }
}
</script><script setup>
const checked = ref(false);
const value = ref('Analytics')
const options = ['Analytics', 'History']
</script>
