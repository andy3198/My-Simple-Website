<template>
<main role="main">
    <div class="row">
        <section id="mu-contact">
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <div class="mu-contact-area">

                    <div class="mu-contact-header">
                      <h2 class="mu-heading-title">CONTACT ME</h2>
                      <span class="mu-header-dot"></span>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                    </div>

                    <div class="mu-contact-content">
                      <div class="row">

                        <div class="col-md-12">
                          <div class="mu-contact-top">

                            <div class="row">
                              <div class="col-sm-4">
                                <div class="mu-contact-top-single">
                                  <div class="mu-icon"><i class="fa fa-map-marker"></i></div>
                                  <p>Banlasan Tubigon Bohol, Purok 3, PHILIPPINES</p>
                                </div>
                              </div>
                              <div class="col-sm-4">
                                <div class="mu-contact-top-single">
                                  <div class="mu-icon"><i class="fa fa-phone"></i></div>
                                  <p>+63 987 678 9834</p>
                                  <p>+63 967 098 785</p>
                                </div>
                              </div>
                              <div class="col-sm-4">
                                <div class="mu-contact-top-single">
                                  <div class="mu-icon"><i class="fa fa-envelope"></i></div>
                                  <p>contact@domain.com</p>
                                  <p>support@domain.com</p>
                                </div>
                              </div>

                            </div>
                          </div>
                        </div>	

                        <div class="col-md-12">
                          <div class="mu-contact-bottom">
                            <div
                              v-if="errorMessage !== ''"
                              class="alert alert-danger"
                              role="alert">
                              {{ errorMessage }}
                            </div>
                            <div
                              v-if="successMessage !== ''"
                              class="alert alert-success"
                              role="alert">
                              {{ successMessage }}
                            </div>
                          <div id="form-messages"></div>
                            <form id="ajax-contact" method="post" action="mailer.php" class="mu-contact-form">
                              <div class="form-group">                
                                <input 
                                  type="text" 
                                  class="form-control" 
                                  placeholder="Name" 
                                  id="name" 
                                  name="name" 
                                  v-model="name"
                                  required>
                              </div>
                              <div class="form-group">                
                                <input 
                                  type="email" 
                                  class="form-control" 
                                  placeholder="Enter Email" 
                                  id="email" 
                                  name="email" 
                                  v-model="email"
                                  required>
                              </div>              
                              <div class="form-group">
                                <textarea 
                                  class="form-control" 
                                  placeholder="Message" 
                                  id="message" 
                                  name="message" 
                                  v-model="message"
                                  required>
                                </textarea>
                              </div>
                              <div>
                                <button type="submit" class="mu-send-msg-btn">
                                    <span v-if="!xhrRequest">SUBMIT</span>
                                    <span v-if="xhrRequest">Please Wait...</span>
                                </button>

                                <div v-if="xhrRequest" class="spinner-border text-secondary loader" role="status">
                                    <span class="sr-only">Loading...</span>
                                </div>

                              </div>
                              
                            </form>
                          </div>
                        </div>	

                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </section>
    </div>
</main>
</template>
<script>
import firebase from "firebase";
export default {
    name: "Contact",
    data() {
        return {
            name: "",
            email: "",
            message: "",
            xhrRequest: false,
            errorMessage: "",
            successMessage: ""
        };
    },
    methods: {
        contactRequest() {
            let v = this;
            v.xhrRequest = true;
            v.errorMessage = "";
            v.successMessage = "";

            firebase
                .auth()
                .postContactWithNameEmailAndMessage(v.name, v.email, v.message)
                .then(
                    () => {
                        v.successMessage = "Submit Successfully.";
                        v.xhrRequest = false;
                    },
                    error => {
                        let errorResponse = JSON.parse(error.message);
                        v.errorMessage = errorResponse.error.message;
                        v.xhrRequest = false;
                    }
                );
        }
    }
};
</script>

