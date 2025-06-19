<template>
<div class="DashBoradMainContent_DV">
    <div class="DashBoardOneMain">
        <div class="CampanyLogo">
            <div class="CampanyTextMain">
                <img src="../../assets/Image/McDonald_Logo.png" alt="">
                <div class="CampanyText">
                    <h1>Alphabet Inc <span>- GOOG</span></h1>
                    <h2>173.19 <span>+0.45%</span></h2>
                </div>
            </div>
        </div>

        <div class="ChatBoxMain">
            <div class="ChatBoxUnder">
                <div class="ChatBoxUnderMainDv">
                    <div class="AskSomething">
                        <div class="BoxIcon">
                            <img src="../../assets/Image/FlashIcon.png" alt="">
                        </div>
                        <input type="text" placeholder="Ask anything about the markets ...">
                    </div>
                    <div>
                        <div class="plan">
                            <p>Free Plan : <span>Upgrade</span></p>
                        </div>
                    </div>
                </div>
                <div class="ChatComitmentMain">
                    <div class="WebMode">
                        <div class="Web">
                            <img src="../../assets/Image/WorldWebIcon.png" alt="">
                            <p>Web Mode</p>
                            <div class="circle"></div>
                        </div>
                        <div class="Web">
                            <img class="MicroImg" src="../../assets/Image/MicroScopeIcon.png" alt="">
                            <p>Deep Mode</p>
                            <div class="circle"></div>
                        </div>
                    </div>
                    <div class="IconsForCommit">
                        <div class="Attachement">
                            <img src="../../assets/Image/attachment.png" alt="">
                        </div>
                        <div class="Attachement">
                            <img src="../../assets/Image/microphone.png" alt="">
                        </div>
                        <div class="Attachement BlueAttachemnet">
                            <img class="SendImg" src="../../assets/Image/sent-fast.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="DashBoardTwoMain">
        <div class="ImgHead">
            <img src="../../assets/Image/AnalyticsLogo.png" alt="">
            <img class="icon" src="../../assets/Image/EditGoIcon.png" alt="">
        </div>
        <div class="SelectBtn">
            <SelectButton v-model="value" :options="options" />
        </div>
        <div class="CompanyControversyMain">
            <div class="CompanyNameDv">
                <div class="CampanyLogo">
                    <div class="CampanyTextMain">
                        <img src="../../assets/Image/McDonald_Logo.png" alt="">
                        <div class="CampanyText">
                            <h1>Alphabet Inc <span>- GOOG</span></h1>
                            <h2>173.19 <span>+0.45%</span></h2>
                        </div>
                    </div>
                    <img class="threeDot" src="../../assets/Image/ThreeDotimg.png" alt="">
                </div>
                <div class="BoxMain">
                    <div class="BoxDvContent">
                        <div class="BoxDvContentTextMain">
                            <div class="BoxText">
                                <p>PREVIOUSLY CLOSE PRICE</p>
                                <h2>173.19</h2>
                            </div>
                            <div class="BoxText">
                                <p>AFTER HOURS</p>
                                <h6>173.19 <span>+0.45%</span></h6>
                            </div>
                        </div>
                        <div class="BoxDvContentTextMain">
                            <div class="BoxText">
                                <p>PREVIOUSLY CLOSE PRICE</p>
                                <h2>173.19</h2>
                            </div>
                            <div class="BoxText">
                                <p>AFTER HOURS</p>
                                <h6>173.19 <span>+0.45%</span></h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ForCastMain">
                    <div class="ForCastHead">
                        <p>Forecast</p>
                        <h2>Linear Regression</h2>
                    </div>
                    <div class="DayOfBoxMainDv">
                        <div class="DivForKeep">
                            <div class="DayOfBoxMain">
                                <div class="OnDay">
                                    <p>1</p>
                                    <h6>Day</h6>
                                </div>
                                <h1>$134.44</h1>
                                <div class="LinearGraph">
                                    <img src="../../assets/Image/LinearGraph.png" alt="">
                                    <h3>+25.5% </h3>
                                </div>
                            </div>
                            <div class="DayOfBoxMain">
                                <div class="OnDay">
                                    <p>1</p>
                                    <h6>Day</h6>
                                </div>
                                <h1>$134.44</h1>
                                <div class="LinearGraph">
                                    <img src="../../assets/Image/LinearGraph.png" alt="">
                                    <h3>+25.5% </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="MetricsPerformanceMain">
                    <div class="MetricsText">
                        <p>Metrics</p>
                        <h2>Performance</h2>
                    </div>
                    <div class="MetricsPerformanceBoxDv">
                        <div class="MetricsBoxOne">
                            <div class="Structure">
                                <h1>Share Structure <img src="../../assets/Image/UnkwonIcon.png" alt=""></h1>
                                <p>Data delayed by 15 minutes</p>
                            </div>
                            <div class="AuthDiv">
                                <h1>Authorized Shares</h1>
                                <h4>500,000M</h4>
                            </div>
                            <div class="AuthDiv WithOutBack">
                                <h1>Outstanding Shares</h1>
                                <h4 class="HighGreen">7.43B</h4>
                            </div>
                            <div class="AuthDiv">
                                <h1>Percent Insiders</h1>
                                <h4 class="WhiteH4">0.052</h4>
                            </div>
                            <div class="AuthDiv WithOutBack">
                                <h1>Percent Institutions</h1>
                                <h4 class="WhiteH4">73.212</h4>
                            </div>
                            <div class="AuthDiv">
                                <h1>Held at DTC</h1>
                                <h4 class="WhiteH4">N/A</h4>
                            </div>
                            <div class="AuthDiv WithOutBack">
                                <h1>Float</h1>
                                <h4 class="WhiteH4">7,423,671,316</h4>
                            </div>
                        </div>
                    </div>
                </div>
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
const value = ref('Overview')
const options = ['Overview', 'Company', 'Financial', 'Earnings', 'Analysis']
</script>

<style scoped>
@import url('./Dashboard.scss');
</style>
