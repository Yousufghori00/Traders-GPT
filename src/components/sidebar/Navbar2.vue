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
                    <ToggleSwitch v-model="checked" />
                </div>
                <div class="Icon_Plus_ToggleDV">
                    <img src="../../assets/Image/Pin_Icon.png" alt="">
                    <p>Alerts</p>
                    <ToggleSwitch v-model="checked" />
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
import ToggleSwitch from 'primevue/toggleswitch';
export default {
    components: {
        SelectButton,
        ToggleSwitch
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
