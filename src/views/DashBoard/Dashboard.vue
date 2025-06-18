<template>
  <div class="DashBoradMainContent_DV">
    <div class="DashBoardOneMain">
      
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
</script>
<script setup>
const value = ref('Overview')
const options = ['Overview', 'Company', 'Financial', 'Earnings', 'Analysis']
</script>

<style scoped>
@import url('./Dashboard.scss');
</style>