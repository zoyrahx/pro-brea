<template>
    <v-container>
        <v-row class="text-center">
            <v-col cols="12">
                <h1>Pro-BREA</h1>
                <h3>
                    Profit and Break-Even Analysis
                </h3>
                <p><br />
                    To help business owners analyze their expenses and profit, we
                    have created this application
                    to automate generation of financial report.
                    Business
                    owners can input their expenses based on each category below. Click Generate Report at the bottom to
                    generate excel file.
                    The report can be modified and can be used for further analysis.
                </p>
            </v-col>
        </v-row>

        <v-row class="mb-3">
            <div class="ma-0 pa-2">
                <h3>1. Fixed Cost (Rent, Equipment, Salary)</h3>
                Fixed cost refers to expenses the business owner has to pay, independent of the product quantity
                produced or sold.
            </div>
        </v-row>

        <v-data-table :headers="headers" :items="fixedCost" sort-by="name" class="elevation-1" hide-default-footer>
            <template v-slot:top>
                <v-toolbar flat>
                    <v-toolbar-title>Fixed Cost</v-toolbar-title>
                    <v-divider class="mx-4" inset vertical></v-divider>
                    <v-spacer></v-spacer>
                    <v-dialog v-model="fixedDialog" max-width="500px">
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn color="success" dark class="mb-2" v-bind="attrs" v-on="on">
                                New Expense
                            </v-btn>
                        </template>
                        <v-card>
                            <v-card-title>
                                <span class="text-h5">{{ fixedFormTitle }}</span>
                            </v-card-title>

                            <v-card-text>
                                <v-container>
                                    <v-row>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="fixedEditedItem.name" label="Expense"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="fixedEditedItem.cost" label="Cost"></v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-card-text>

                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="close(0)">
                                    Cancel
                                </v-btn>
                                <v-btn color="blue darken-1" text @click="save(0)">
                                    Save
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                    <v-dialog v-model="fixedDialogDelete" max-width="500px">
                        <v-card>
                            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="closeDelete(0)">Cancel</v-btn>
                                <v-btn color="blue darken-1" text @click="deleteItemConfirm(0)">OK</v-btn>
                                <v-spacer></v-spacer>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-toolbar>
            </template>
            <template v-slot:[`item.actions`]="{ item }">
                <v-icon small class="mr-2" @click="editItem(0, item)">
                    mdi-pencil
                </v-icon>
                <v-icon small @click="deleteItem(0, item)">
                    mdi-delete
                </v-icon>
            </template>
            <template v-slot:no-data>
                <v-btn color="primary" @click="initialize">
                    Reset
                </v-btn>
            </template>
        </v-data-table>

        <v-row class="my-3">
            <div class="ma-0 pa-2">
                <h3>2. Unit Variable Cost (Ingredients, Packaging, Delivery)</h3>
                Refers to the cost of producing a unit of the product.
            </div>
        </v-row>

        <v-data-table :headers="headers" :items="variableCost" sort-by="name" class="elevation-1" hide-default-footer>
            <template v-slot:top>
                <v-toolbar flat>
                    <v-toolbar-title>Unit Variable Cost</v-toolbar-title>
                    <v-divider class="mx-4" inset vertical></v-divider>
                    <v-spacer></v-spacer>
                    <v-dialog v-model="varDialog" max-width="500px">
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn color="success" dark class="mb-2" v-bind="attrs" v-on="on">
                                New Expense
                            </v-btn>
                        </template>
                        <v-card>
                            <v-card-title>
                                <span class="text-h5">{{ varFormTitle }}</span>
                            </v-card-title>

                            <v-card-text>
                                <v-container>
                                    <v-row>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="varEditedItem.name" label="Expense"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="varEditedItem.cost" label="Cost"></v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-card-text>

                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="close(1)">
                                    Cancel
                                </v-btn>
                                <v-btn color="blue darken-1" text @click="save(1)">
                                    Save
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                    <v-dialog v-model="varDialogDelete" max-width="500px">
                        <v-card>
                            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="closeDelete(1)">Cancel</v-btn>
                                <v-btn color="blue darken-1" text @click="deleteItemConfirm(1)">OK</v-btn>
                                <v-spacer></v-spacer>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-toolbar>
            </template>
            <template v-slot:[`item.actions`]="{ item }">
                <v-icon small class="mr-2" @click="editItem(1, item)">
                    mdi-pencil
                </v-icon>
                <v-icon small @click="deleteItem(1, item)">
                    mdi-delete
                </v-icon>
            </template>
            <template v-slot:no-data>
                <v-btn color="primary" @click="initialize">
                    Reset
                </v-btn>
            </template>
        </v-data-table>

        <v-row class="mt-3">
            <div class="ma-0 pa-2">
                <h3>3. Selling Price</h3>
                Price of a unit of the product.
            </div>
        </v-row>

        <v-row class="mb-0 pb-0">
            <v-col cols="6">
                <v-text-field v-model="sellingPrice" placeholder="0" outlined>
                </v-text-field>
            </v-col>
        </v-row>

        <v-row class="mt-0">
            <div class="my-0 px-2">
                <h3>4. Target Profit</h3>
                Target amount the business wants to earn.
            </div>
        </v-row>

        <v-row class="my-2">
            <v-col cols="6">
                <v-text-field v-model="targetProfit" placeholder="0" outlined>
                </v-text-field>
            </v-col>
        </v-row>

        <v-row class="mb-6" align="center" justify="center">
            <v-btn x-large color="primary">
                Generate Report
            </v-btn>
        </v-row>
    </v-container>
</template>

<script>
// import {XLSX} from 'xlsx';

export default {
    name: 'ProBreaHome',
    data() {
        return {
            fixedDialog: false,
            varDialog: false,
            fixedDialogDelete: false,
            varDialogDelete: false,
            fixedEditedIndex: -1,
            varEditedIndex: -1,
            sellingPrice: 0,
            targetProfit: 0,
            headers: [
                { text: 'Name of Expenses', value: 'name', width: '50%' },
                { text: 'Cost', value: 'cost', width: '30%' },
                { text: 'Actions', value: 'actions', sortable: false },
            ],
            fixedCost: [{
                title: "name",
                description: "",
                cost: 0
            }],
            variableCost: [{
                title: "name",
                description: "",
                cost: 0
            }],
            fixedEditedItem: {
                name: '',
                description: 0,
                cost: 0
            },
            fixedDefaultItem: {
                name: '',
                description: 0,
                cost: 0
            },
            varEditedItem: {
                name: '',
                description: 0,
                cost: 0
            },
            varDefaultItem: {
                name: '',
                description: 0,
                cost: 0
            },

        }
    },
    computed: {
        fixedFormTitle() {
            return this.fixedEditedIndex === -1 ? 'New Expense' : 'Edit Expense'
        },
        varFormTitle() {
            return this.varEditedIndex === -1 ? 'New Expense' : 'Edit Expense'
        }
    },
    watch: {
        fixedDialog(val) {
            val || this.close(0)
        },
        varDialog(val) {
            val || this.close(1)
        },
        fixedDialogDelete(val) {
            val || this.closeDelete(0)
        },
        varDialogDelete(val) {
            val || this.closeDelete(1)
        },
    },
    created() {
        this.initialize()
    },
    methods: {
        initialize() {
            this.fixedCost = [
                {
                    name: 'Rent',
                    description: 0,
                    cost: 0
                }]

        },
        close(tableIndex) {
            if (tableIndex == 0) {
                this.fixedDialog = false
                this.$nextTick(() => {
                    this.fixedEditedItem = Object.assign({}, this.defaultItem)
                    this.fixedEditedIndex = -1
                })
            } else {
                this.varDialog = false
                this.$nextTick(() => {
                    this.varEditedItem = Object.assign({}, this.defaultItem)
                    this.varEditedIndex = -1
                })
            }
        },
        save(tableIndex) {
            if (tableIndex == 0) {
                if (this.fixedEditedIndex > -1) {
                    Object.assign(this.fixedCost[this.fixedEditedIndex], this.fixedEditedItem)
                } else {
                    this.fixedCost.push(this.fixedEditedItem)
                }
            } else {
                if (this.varEditedIndex > -1) {
                    Object.assign(this.variableCost[this.varEditedIndex], this.varEditedItem)
                } else {
                    this.variableCost.push(this.varEditedItem)
                }
            }
            this.close(tableIndex)
        },
        closeDelete(tableIndex) {
            if (tableIndex == 0) {
                this.fixedDialogDelete = false
                this.$nextTick(() => {
                    this.fixedEditedItem = Object.assign({}, this.defaultItem)
                    this.fixedEditedIndex = -1
                })
            } else {
                this.varDialogDelete = false
                this.$nextTick(() => {
                    this.varEditedItem = Object.assign({}, this.defaultItem)
                    this.varEditedIndex = -1
                })
            }
        },
        editItem(tableIndex, item) {
            if (tableIndex == 0) {
                this.fixedEditedIndex = this.fixedCost.indexOf(item)
                this.fixedEditedItem = Object.assign({}, item)
                this.fixedDialog = true
            } else {
                this.varEditedIndex = this.variableCost.indexOf(item)
                this.varEditedItem = Object.assign({}, item)
                this.varDialog = true
            }
        },
        deleteItem(tableIndex, item) {
            if (tableIndex == 0) {
                this.fixedEditedIndex = this.fixedCost.indexOf(item)
                this.fixedEditedItem = Object.assign({}, item)
                this.fixedDialogDelete = true
            } else {
                this.varEditedIndex = this.variableCost.indexOf(item)
                this.varEditedItem = Object.assign({}, item)
                this.varDialogDelete = true
            }

        },
        deleteItemConfirm(tableIndex) {
            if (tableIndex == 0) {
                this.fixedCost.splice(this.fixedEditedIndex, 1)
            } else {
                this.variableCost.splice(this.varEditedIndex, 1)
            }
            this.closeDelete(tableIndex)
        },
        // download() {
        //     const data = XLSX.utils.json_to_sheet(this.fixedCost)
        //     const wb = XLSX.utils.book_new()
        //     XLSX.utils.book_append_sheet(wb, data, 'data')
        //     XLSX.writeFile(wb, 'Pro-BREA_Financial Report.xlsx')
        // }
    }
}
</script>
