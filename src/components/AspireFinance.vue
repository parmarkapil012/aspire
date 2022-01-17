<template>
  <div class="main-content-area">
    <div class="row align-items-center">
      <div class="col">
        <p>Availble Balance</p>
        <span class="custom-badge"> S$ </span>
        <span class="custom-title">3,000</span>
      </div>
      <div class="col-auto">
        <b-button variant="primary" v-b-modal.addNewCard> + New Card</b-button>
      </div>
    </div>
    <br /><br />
    <div class="custom-tabs">
      <b-tabs content-class="mt-3">
        <b-tab title="My dabit cards" active>
          <div class="shadow-sm p-5 mb-5 bg-body rounded">
            <div class="row">
              <div class="col">
                <!-- Hide Show Numbers -->
                <p class="text-right">
                  <b-link
                    class="show-link"
                    v-if="isNumber == false"
                    @click="viewNumbers"
                    ><i class="far fa-eye"></i> Show card number</b-link
                  >
                  <b-link class="show-link" v-if="isNumber" @click="hideNumbers"
                    ><i class="far fa-eye"></i> Hide card number</b-link
                  >
                </p>
                <!-- End Hide Show Numbers -->

                <!-- Card carousel Start -->
                <b-carousel id="carousel-1">
                  <b-carousel-slide
                    v-for="(card, c) in cardDetails"
                    :key="c"
                    class="123"
                    img-blank
                    img-alt="Blank image"
                    img-height="230"
                    img-width="480"
                  >
                    <div class="debit-card">
                      <div class="img-logo">
                        <img src="../assets/Visa Logo.svg" alt="" />
                      </div>
                      <div class="card-h-name">{{ card.cardName }}</div>
                      <div class="card-number">
                        <div class="row">
                          <div class="col">
                            <span v-if="isNumber == true">{{
                              card.CardNumber1
                            }}</span>
                            <span v-else>****</span>
                          </div>
                          <div class="col">
                            <span v-if="isNumber == true">{{
                              card.CardNumber2
                            }}</span>
                            <span v-else>****</span>
                          </div>
                          <div class="col">
                            <span v-if="isNumber == true">{{
                              card.CardNumber3
                            }}</span>
                            <span v-else>****</span>
                          </div>
                          <div class="col">
                            <span>1234</span>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col"><small>Thru:12/20</small></div>
                        <div class="col">
                          <small v-if="isNumber == true"
                            >CVV: {{ card.cvvNumber }}</small
                          ><small v-else>CVV: ***</small>
                        </div>
                      </div>
                      <div class="img-logo">
                        <img src="../assets/Visa Logo.svg" alt="" />
                      </div>
                    </div>
                  </b-carousel-slide>
                </b-carousel>
                <!-- End Card carousel -->

                <!-- Card Action Button Start -->
                <div class="custom-icon-box p-3">
                  <div class="row">
                    <div class="col">
                      <div><img src="../assets/Freeze card.svg" alt="" /></div>
                      <div class="title">Freeze Card</div>
                    </div>
                    <div class="col">
                      <div>
                        <img src="../assets/Set spend limit.svg" alt="" />
                      </div>
                      <div class="title">Set spent limit</div>
                    </div>
                    <div class="col">
                      <div><img src="../assets/GPay.svg" alt="" /></div>
                      <div class="title">Add to Gpay</div>
                    </div>
                    <div class="col">
                      <div><img src="../assets/Replace card.svg" alt="" /></div>
                      <div class="title">Replace card</div>
                    </div>
                    <div class="col" @click="showDeleteModal()">
                      <div>
                        <img src="../assets/Deactivate card.svg" alt="" />
                      </div>
                      <div class="title">Cancel Card</div>
                    </div>
                  </div>
                </div>
                <!-- Card Action Button End -->
              </div>

              <div class="col">
                <div class="custom-accordion">
                  <!-- Start Card Detail Tab -->
                  <b-card no-body class="mt-3">
                    <b-card-header header-tag="header" class="p-0" role="tab">
                      <b-button
                        block
                        v-b-toggle.accordion-3
                        class="w-100 text-left"
                        ><img
                          src="../assets/Group 11889.svg"
                          class="accordian-icon"
                          alt=""
                        />Card details</b-button
                      >
                    </b-card-header>
                    <b-collapse
                      id="accordion-3"
                      accordion="my-accordion"
                      role="tabpanel"
                    >
                      <b-card-body>
                        <b-card-text></b-card-text>
                      </b-card-body>
                    </b-collapse>
                  </b-card>
                  <!-- End  Card Detail Tab -->

                  <!-- Start Transction Tab -->
                  <b-card no-body class="mt-3">
                    <b-card-header header-tag="header" class="p-0" role="tab">
                      <b-button
                        block
                        v-b-toggle.accordion-1
                        class="w-100 text-left"
                        ><img
                          src="../assets/transaction.svg"
                          class="accordian-icon"
                          alt=""
                        />Recent transcations
                      </b-button>
                    </b-card-header>
                    <b-collapse
                      id="accordion-1"
                      visible
                      accordion="my-accordion"
                      role="tabpanel"
                    >
                      <div class="px-3 py-3">
                        <ul class="custom-list-sm">
                          <li
                            v-for="(transcation, t) in recentTransactions"
                            :key="t"
                          >
                            <div class="row">
                              <div class="col-auto">
                                <div
                                  v-if="transcation.type == 'credit'"
                                  class="list-icon color-one"
                                >
                                  <img
                                    src="../assets/file-storage.svg"
                                    alt=""
                                  />
                                </div>
                                <div
                                  v-if="transcation.type == 'debit'"
                                  class="list-icon color-two"
                                >
                                  <img src="../assets/flights.svg" alt="" />
                                </div>
                                <div
                                  v-if="transcation.type == 'refund'"
                                  class="list-icon color-three"
                                >
                                  <img src="../assets/megaphone.svg" alt="" />
                                </div>
                              </div>
                              <div class="col">
                                <div class="inner-list-content">
                                  <div class="w-100">
                                    <span class="card-data-title">{{
                                      transcation.name
                                    }}</span>
                                  </div>
                                  <div class="w-100">
                                    <span class="date">{{
                                      transcation.transcationDate
                                    }}</span>
                                  </div>
                                  <div class="w-100 mt-2">
                                    <div class="card-info">
                                      <b-badge class="mr-3"
                                        ><img
                                          src="../assets/business-and-finance.svg"
                                          alt="" /></b-badge
                                      >{{ transcation.transcationDesc }}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="col-auto digit-box">
                                <span
                                  class="pr-3"
                                  v-if="transcation.type == 'debit'"
                                  >- S$ {{ transcation.amount }}</span
                                >
                                <span class="pr-3 green-color" v-else
                                  >+ S${{ transcation.amount }}</span
                                >
                                <img src="../assets/next.svg" alt="" />
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </b-collapse>
                  </b-card>
                  <!-- End Transction Tab -->
                </div>
              </div>
            </div>
          </div>
        </b-tab>
        <!-- All Card Second Tab -->
        <b-tab title="All company cards"><p>All Company Cards</p></b-tab>
        <!-- End All Card Tab -->
      </b-tabs>
    </div>
    <!-- Popup for add New Card -->
    <b-modal
      id="addNewCard"
      ref="modal"
      title="Add New Card"
      @show="resetModal"
      @hidden="resetModal"
      hide-footer
      hide-header-close
    >
      <b-form @submit.prevent="addCard()">
        <b-form-group label="Name" label-for="name">
          <b-form-input
            id="name"
            name="cardName"
            v-model="cardName"
            v-validate="{ required: true }"
          ></b-form-input>
        </b-form-group>
        <span v-show="errors.has('cardName')" class="text-danger m-0"
          >Name is required.</span
        >
        <div class="text-right mt-3">
          <b-button
            variant="outline-primary"
            class="mr-3"
            @click="$bvModal.hide('addNewCard')"
            >Cancel</b-button
          >
          <b-button type="submit" variant="primary">Submit</b-button>
        </div>
      </b-form>
    </b-modal>
    <!-- End Popup for add New Card -->
    <b-modal id="deleteModal" title="Delete Card" hide-footer hide-header-close>
      <Confirmationmodel
        @confirm="removeCard()"
        @cancel="cancelCard"
      ></Confirmationmodel>
    </b-modal>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Confirmationmodel from "@/components/Confirmpopup.vue";
import "@/assets/scss/_aspireFinance.scss";

@Component({
  components: {
    Confirmationmodel,
  },
})
export default class AspireFinance extends Vue {
  @Prop() private msg!: string;
  recentTransactions: any = this.$store.state.transcationHistory;
  cardName: any = "";
  cardDetails: any = this.$store.state.cardDetails;
  isNumber: any = false;
  confirmModal: any = false;

  resetModal() {
    this.cardName = "";
  }
  viewNumbers() {
    this.isNumber = true;
  }
  hideNumbers() {
    this.isNumber = false;
  }
  mounted() {
    this.$store.dispatch("setCardDetails", [
      {
        id: this.randomThreeNumber(),
        cardName: "Trang Hung",
        CardNumber1: this.randomCode(),
        CardNumber2: this.randomCode(),
        CardNumber3: this.randomCode(),
        CardNumber4: this.randomCode(),
        cvvNumber: this.randomThreeNumber(),
        expireDate: this.randomDate(new Date(2012, 0, 1), new Date()),
        isFreeze: false,
        isCancel: false,
      },
    ]);
  }
  addCard() {
    this.$validator.validateAll().then((result) => {
      if (result) {
        let currentCardDetails = this.cardDetails;
        let cardDetails = {
          id: this.randomThreeNumber(),
          cardName: this.cardName,
          CardNumber1: this.randomCode(),
          CardNumber2: this.randomCode(),
          CardNumber3: this.randomCode(),
          CardNumber4: this.randomCode(),
          cvvNumber: this.randomThreeNumber(),
          expireDate: this.randomDate(new Date(2012, 0, 1), new Date()),
          isFreeze: false,
          isCancel: false,
        };
        let updatedCardrecords = currentCardDetails.push(cardDetails);
        this.$store.dispatch("setCardDetails", updatedCardrecords);
        this.$toasted.show("Card added sucessfully", {
          type: "success",
          theme: "toasted-primary",
          position: "top-right",
          duration: 3000,
        });
        this.$bvModal.hide("addNewCard");
      }
    });
  }

  randomCode() {
    return Math.floor(1000 + Math.random() * 9000);
  }
  randomThreeNumber() {
    return Math.floor(Math.random() * (999 - 100 + 1) + 100);
  }

  randomDate(start: any, end: any) {
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
  }

  removeCard() {
    let updatedCardDetails = this.cardDetails.slice(1);
    Vue.set(this.$store.state.cardDetails, "", updatedCardDetails);
    this.$store.dispatch("setCardDetails", updatedCardDetails);
    this.$toasted.show("Card removed sucessfully", {
      type: "success",
      theme: "toasted-primary",
      position: "top-right",
      duration: 3000,
    });
    this.$bvModal.hide("deleteModal");
  }

  cancelCard() {
    this.$bvModal.hide("deleteModal");
  }

  showDeleteModal() {
    this.$bvModal.show("deleteModal");
  }
}
</script>

<style style="scss">

</style>
