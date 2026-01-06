       import { Given,Then } from "@cucumber/cucumber";
import { request } from "playwright";
import { expect, Expect } from "playwright/test";

       let response : any
       Given('I post the data via POST call', async function (docString) {
        const baseURL='https://reqres.in/api/users'
        const apicontext=await request.newContext({baseURL:baseURL})
        response = await apicontext.post(baseURL,{
            headers:{
                "x-api-key":"reqres_123a63cda1f448c1883661b9a94ead0c"
            },
            data: JSON.parse(docString)})            
         });     

         Then('I will verify the status code as {int}', async function (int) {

            expect(response.status()).toBe(int)         
         });
   
         Then('I will verify the data in the response', async function () {
           
         });
        
         Then('I will verify the data in the response', async function () {            
           
         });




         