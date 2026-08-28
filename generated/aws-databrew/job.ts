// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcJobProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#data_catalog_outputs CcJob#data_catalog_outputs}
    */
    readonly dataCatalogOutputs?: CcJob.DataCatalogOutputProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#database_outputs CcJob#database_outputs}
    */
    readonly databaseOutputs?: CcJob.DatabaseOutputProperty[] | cdktn.IResolvable;
    /**
    * Dataset name
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#dataset_name CcJob#dataset_name}
    */
    readonly datasetName?: string;
    /**
    * Encryption Key Arn
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#encryption_key_arn CcJob#encryption_key_arn}
    */
    readonly encryptionKeyArn?: string;
    /**
    * Encryption mode
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#encryption_mode CcJob#encryption_mode}
    */
    readonly encryptionMode?: string;
    /**
    * Job Sample
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#job_sample CcJob#job_sample}
    */
    readonly jobSample?: CcJob.JobSampleProperty;
    /**
    * Log subscription
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#log_subscription CcJob#log_subscription}
    */
    readonly logSubscription?: string;
    /**
    * Max capacity
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#max_capacity CcJob#max_capacity}
    */
    readonly maxCapacity?: number;
    /**
    * Max retries
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#max_retries CcJob#max_retries}
    */
    readonly maxRetries?: number;
    /**
    * Job name
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#name CcJob#name}
    */
    readonly name: string;
    /**
    * Output location
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#output_location CcJob#output_location}
    */
    readonly outputLocation?: CcJob.OutputLocationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#outputs CcJob#outputs}
    */
    readonly outputs?: CcJob.OutputProperty[] | cdktn.IResolvable;
    /**
    * Profile Job configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#profile_configuration CcJob#profile_configuration}
    */
    readonly profileConfiguration?: CcJob.ProfileConfigurationProperty;
    /**
    * Project name
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#project_name CcJob#project_name}
    */
    readonly projectName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#recipe CcJob#recipe}
    */
    readonly recipe?: CcJob.RecipeProperty;
    /**
    * Role arn
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#role_arn CcJob#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#tags CcJob#tags}
    */
    readonly tags?: CcJob.TagProperty[] | cdktn.IResolvable;
    /**
    * Timeout
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#timeout CcJob#timeout}
    */
    readonly timeout?: number;
    /**
    * Job type
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#type CcJob#type}
    */
    readonly type: string;
    /**
    * Data quality rules configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#validation_configurations CcJob#validation_configurations}
    */
    readonly validationConfigurations?: CcJob.ValidationConfigurationProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job awscc_databrew_job}
*/
export class CcJob extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_databrew_job";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcJob resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcJob to import
    * @param importFromId The id of the existing CcJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcJob to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_databrew_job", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job awscc_databrew_job} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcJobProps
    */
    public constructor(scope: Construct, id: string, config: CcJobProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_databrew_job',
            terraformGeneratorMetadata: {
                providerName: 'awscc'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._dataCatalogOutputs.internalValue = config.dataCatalogOutputs;
        this._databaseOutputs.internalValue = config.databaseOutputs;
        this._datasetName = config.datasetName;
        this._encryptionKeyArn = config.encryptionKeyArn;
        this._encryptionMode = config.encryptionMode;
        this._jobSample.internalValue = config.jobSample;
        this._logSubscription = config.logSubscription;
        this._maxCapacity = config.maxCapacity;
        this._maxRetries = config.maxRetries;
        this._name = config.name;
        this._outputLocation.internalValue = config.outputLocation;
        this._outputs.internalValue = config.outputs;
        this._profileConfiguration.internalValue = config.profileConfiguration;
        this._projectName = config.projectName;
        this._recipe.internalValue = config.recipe;
        this._roleArn = config.roleArn;
        this._tags.internalValue = config.tags;
        this._timeout = config.timeout;
        this._type = config.type;
        this._validationConfigurations.internalValue = config.validationConfigurations;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // data_catalog_outputs - computed: true, optional: true, required: false
    private _dataCatalogOutputs = new CcJob.DataCatalogOutputPropertyList(this, "data_catalog_outputs", false);
    public get dataCatalogOutputs() {
        return this._dataCatalogOutputs;
    }
    public putDataCatalogOutputs(value: CcJob.DataCatalogOutputProperty[] | cdktn.IResolvable) {
        this._dataCatalogOutputs.internalValue = value;
    }
    public resetDataCatalogOutputs() {
        this._dataCatalogOutputs.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataCatalogOutputsInput() {
        return this._dataCatalogOutputs.internalValue;
    }

    // database_outputs - computed: true, optional: true, required: false
    private _databaseOutputs = new CcJob.DatabaseOutputPropertyList(this, "database_outputs", false);
    public get databaseOutputs() {
        return this._databaseOutputs;
    }
    public putDatabaseOutputs(value: CcJob.DatabaseOutputProperty[] | cdktn.IResolvable) {
        this._databaseOutputs.internalValue = value;
    }
    public resetDatabaseOutputs() {
        this._databaseOutputs.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseOutputsInput() {
        return this._databaseOutputs.internalValue;
    }

    // dataset_name - computed: true, optional: true, required: false
    private _datasetName?: string; 
    public get datasetName() {
        return this.getStringAttribute('dataset_name');
    }
    public set datasetName(value: string) {
        this._datasetName = value;
    }
    public resetDatasetName() {
        this._datasetName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get datasetNameInput() {
        return this._datasetName;
    }

    // encryption_key_arn - computed: true, optional: true, required: false
    private _encryptionKeyArn?: string; 
    public get encryptionKeyArn() {
        return this.getStringAttribute('encryption_key_arn');
    }
    public set encryptionKeyArn(value: string) {
        this._encryptionKeyArn = value;
    }
    public resetEncryptionKeyArn() {
        this._encryptionKeyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionKeyArnInput() {
        return this._encryptionKeyArn;
    }

    // encryption_mode - computed: true, optional: true, required: false
    private _encryptionMode?: string; 
    public get encryptionMode() {
        return this.getStringAttribute('encryption_mode');
    }
    public set encryptionMode(value: string) {
        this._encryptionMode = value;
    }
    public resetEncryptionMode() {
        this._encryptionMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionModeInput() {
        return this._encryptionMode;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // job_sample - computed: true, optional: true, required: false
    private _jobSample = new CcJob.JobSamplePropertyOutputReference(this, "job_sample");
    public get jobSample() {
        return this._jobSample;
    }
    public putJobSample(value: CcJob.JobSampleProperty) {
        this._jobSample.internalValue = value;
    }
    public resetJobSample() {
        this._jobSample.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jobSampleInput() {
        return this._jobSample.internalValue;
    }

    // log_subscription - computed: true, optional: true, required: false
    private _logSubscription?: string; 
    public get logSubscription() {
        return this.getStringAttribute('log_subscription');
    }
    public set logSubscription(value: string) {
        this._logSubscription = value;
    }
    public resetLogSubscription() {
        this._logSubscription = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logSubscriptionInput() {
        return this._logSubscription;
    }

    // max_capacity - computed: true, optional: true, required: false
    private _maxCapacity?: number; 
    public get maxCapacity() {
        return this.getNumberAttribute('max_capacity');
    }
    public set maxCapacity(value: number) {
        this._maxCapacity = value;
    }
    public resetMaxCapacity() {
        this._maxCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxCapacityInput() {
        return this._maxCapacity;
    }

    // max_retries - computed: true, optional: true, required: false
    private _maxRetries?: number; 
    public get maxRetries() {
        return this.getNumberAttribute('max_retries');
    }
    public set maxRetries(value: number) {
        this._maxRetries = value;
    }
    public resetMaxRetries() {
        this._maxRetries = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxRetriesInput() {
        return this._maxRetries;
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
    }

    // output_location - computed: true, optional: true, required: false
    private _outputLocation = new CcJob.OutputLocationPropertyOutputReference(this, "output_location");
    public get outputLocation() {
        return this._outputLocation;
    }
    public putOutputLocation(value: CcJob.OutputLocationProperty) {
        this._outputLocation.internalValue = value;
    }
    public resetOutputLocation() {
        this._outputLocation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outputLocationInput() {
        return this._outputLocation.internalValue;
    }

    // outputs - computed: true, optional: true, required: false
    private _outputs = new CcJob.OutputPropertyList(this, "outputs", false);
    public get outputs() {
        return this._outputs;
    }
    public putOutputs(value: CcJob.OutputProperty[] | cdktn.IResolvable) {
        this._outputs.internalValue = value;
    }
    public resetOutputs() {
        this._outputs.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outputsInput() {
        return this._outputs.internalValue;
    }

    // profile_configuration - computed: true, optional: true, required: false
    private _profileConfiguration = new CcJob.ProfileConfigurationPropertyOutputReference(this, "profile_configuration");
    public get profileConfiguration() {
        return this._profileConfiguration;
    }
    public putProfileConfiguration(value: CcJob.ProfileConfigurationProperty) {
        this._profileConfiguration.internalValue = value;
    }
    public resetProfileConfiguration() {
        this._profileConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get profileConfigurationInput() {
        return this._profileConfiguration.internalValue;
    }

    // project_name - computed: true, optional: true, required: false
    private _projectName?: string; 
    public get projectName() {
        return this.getStringAttribute('project_name');
    }
    public set projectName(value: string) {
        this._projectName = value;
    }
    public resetProjectName() {
        this._projectName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get projectNameInput() {
        return this._projectName;
    }

    // recipe - computed: true, optional: true, required: false
    private _recipe = new CcJob.RecipePropertyOutputReference(this, "recipe");
    public get recipe() {
        return this._recipe;
    }
    public putRecipe(value: CcJob.RecipeProperty) {
        this._recipe.internalValue = value;
    }
    public resetRecipe() {
        this._recipe.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get recipeInput() {
        return this._recipe.internalValue;
    }

    // role_arn - computed: false, optional: false, required: true
    private _roleArn?: string; 
    public get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
        this._roleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
        return this._roleArn;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcJob.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcJob.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // timeout - computed: true, optional: true, required: false
    private _timeout?: number; 
    public get timeout() {
        return this.getNumberAttribute('timeout');
    }
    public set timeout(value: number) {
        this._timeout = value;
    }
    public resetTimeout() {
        this._timeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutInput() {
        return this._timeout;
    }

    // type - computed: false, optional: false, required: true
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }

    // validation_configurations - computed: true, optional: true, required: false
    private _validationConfigurations = new CcJob.ValidationConfigurationPropertyList(this, "validation_configurations", false);
    public get validationConfigurations() {
        return this._validationConfigurations;
    }
    public putValidationConfigurations(value: CcJob.ValidationConfigurationProperty[] | cdktn.IResolvable) {
        this._validationConfigurations.internalValue = value;
    }
    public resetValidationConfigurations() {
        this._validationConfigurations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get validationConfigurationsInput() {
        return this._validationConfigurations.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            data_catalog_outputs: cdktn.listMapper(ccJobDataCatalogOutputPropertyToTerraform, false)(this._dataCatalogOutputs.internalValue),
            database_outputs: cdktn.listMapper(ccJobDatabaseOutputPropertyToTerraform, false)(this._databaseOutputs.internalValue),
            dataset_name: cdktn.stringToTerraform(this._datasetName),
            encryption_key_arn: cdktn.stringToTerraform(this._encryptionKeyArn),
            encryption_mode: cdktn.stringToTerraform(this._encryptionMode),
            job_sample: ccJobJobSamplePropertyToTerraform(this._jobSample.internalValue),
            log_subscription: cdktn.stringToTerraform(this._logSubscription),
            max_capacity: cdktn.numberToTerraform(this._maxCapacity),
            max_retries: cdktn.numberToTerraform(this._maxRetries),
            name: cdktn.stringToTerraform(this._name),
            output_location: ccJobOutputLocationPropertyToTerraform(this._outputLocation.internalValue),
            outputs: cdktn.listMapper(ccJobOutputPropertyToTerraform, false)(this._outputs.internalValue),
            profile_configuration: ccJobProfileConfigurationPropertyToTerraform(this._profileConfiguration.internalValue),
            project_name: cdktn.stringToTerraform(this._projectName),
            recipe: ccJobRecipePropertyToTerraform(this._recipe.internalValue),
            role_arn: cdktn.stringToTerraform(this._roleArn),
            tags: cdktn.listMapper(ccJobTagPropertyToTerraform, false)(this._tags.internalValue),
            timeout: cdktn.numberToTerraform(this._timeout),
            type: cdktn.stringToTerraform(this._type),
            validation_configurations: cdktn.listMapper(ccJobValidationConfigurationPropertyToTerraform, false)(this._validationConfigurations.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            data_catalog_outputs: {
                value: cdktn.listMapperHcl(ccJobDataCatalogOutputPropertyToHclTerraform, false)(this._dataCatalogOutputs.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcJob.DataCatalogOutputPropertyList",
            },
            database_outputs: {
                value: cdktn.listMapperHcl(ccJobDatabaseOutputPropertyToHclTerraform, false)(this._databaseOutputs.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcJob.DatabaseOutputPropertyList",
            },
            dataset_name: {
                value: cdktn.stringToHclTerraform(this._datasetName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            encryption_key_arn: {
                value: cdktn.stringToHclTerraform(this._encryptionKeyArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            encryption_mode: {
                value: cdktn.stringToHclTerraform(this._encryptionMode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            job_sample: {
                value: ccJobJobSamplePropertyToHclTerraform(this._jobSample.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcJob.JobSampleProperty",
            },
            log_subscription: {
                value: cdktn.stringToHclTerraform(this._logSubscription),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            max_capacity: {
                value: cdktn.numberToHclTerraform(this._maxCapacity),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            max_retries: {
                value: cdktn.numberToHclTerraform(this._maxRetries),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            output_location: {
                value: ccJobOutputLocationPropertyToHclTerraform(this._outputLocation.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcJob.OutputLocationProperty",
            },
            outputs: {
                value: cdktn.listMapperHcl(ccJobOutputPropertyToHclTerraform, false)(this._outputs.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcJob.OutputPropertyList",
            },
            profile_configuration: {
                value: ccJobProfileConfigurationPropertyToHclTerraform(this._profileConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcJob.ProfileConfigurationProperty",
            },
            project_name: {
                value: cdktn.stringToHclTerraform(this._projectName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            recipe: {
                value: ccJobRecipePropertyToHclTerraform(this._recipe.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcJob.RecipeProperty",
            },
            role_arn: {
                value: cdktn.stringToHclTerraform(this._roleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccJobTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcJob.TagPropertyList",
            },
            timeout: {
                value: cdktn.numberToHclTerraform(this._timeout),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            type: {
                value: cdktn.stringToHclTerraform(this._type),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            validation_configurations: {
                value: cdktn.listMapperHcl(ccJobValidationConfigurationPropertyToHclTerraform, false)(this._validationConfigurations.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcJob.ValidationConfigurationPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccJobS3LocationPropertyToTerraform(struct?: CcJob.S3LocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bucket: cdktn.stringToTerraform(struct!.bucket),
        bucket_owner: cdktn.stringToTerraform(struct!.bucketOwner),
        key: cdktn.stringToTerraform(struct!.key),
    }
}


export function ccJobS3LocationPropertyToHclTerraform(struct?: CcJob.S3LocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bucket: {
            value: cdktn.stringToHclTerraform(struct!.bucket),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        bucket_owner: {
            value: cdktn.stringToHclTerraform(struct!.bucketOwner),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key: {
            value: cdktn.stringToHclTerraform(struct!.key),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccJobDatabaseTableOutputOptionsPropertyToTerraform(struct?: CcJob.DatabaseTableOutputOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        table_name: cdktn.stringToTerraform(struct!.tableName),
        temp_directory: ccJobS3LocationPropertyToTerraform(struct!.tempDirectory),
    }
}


export function ccJobDatabaseTableOutputOptionsPropertyToHclTerraform(struct?: CcJob.DatabaseTableOutputOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        table_name: {
            value: cdktn.stringToHclTerraform(struct!.tableName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        temp_directory: {
            value: ccJobS3LocationPropertyToHclTerraform(struct!.tempDirectory),
            isBlock: true,
            type: "struct",
            storageClassType: "S3LocationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccJobDataCatalogOutputsS3OptionsLocationPropertyToTerraform(struct?: CcJob.DataCatalogOutputsS3OptionsLocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bucket: cdktn.stringToTerraform(struct!.bucket),
        bucket_owner: cdktn.stringToTerraform(struct!.bucketOwner),
        key: cdktn.stringToTerraform(struct!.key),
    }
}


export function ccJobDataCatalogOutputsS3OptionsLocationPropertyToHclTerraform(struct?: CcJob.DataCatalogOutputsS3OptionsLocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bucket: {
            value: cdktn.stringToHclTerraform(struct!.bucket),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        bucket_owner: {
            value: cdktn.stringToHclTerraform(struct!.bucketOwner),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key: {
            value: cdktn.stringToHclTerraform(struct!.key),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccJobS3TableOutputOptionsPropertyToTerraform(struct?: CcJob.S3TableOutputOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        location: ccJobDataCatalogOutputsS3OptionsLocationPropertyToTerraform(struct!.location),
    }
}


export function ccJobS3TableOutputOptionsPropertyToHclTerraform(struct?: CcJob.S3TableOutputOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        location: {
            value: ccJobDataCatalogOutputsS3OptionsLocationPropertyToHclTerraform(struct!.location),
            isBlock: true,
            type: "struct",
            storageClassType: "DataCatalogOutputsS3OptionsLocationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccJobDataCatalogOutputPropertyToTerraform(struct?: CcJob.DataCatalogOutputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        catalog_id: cdktn.stringToTerraform(struct!.catalogId),
        database_name: cdktn.stringToTerraform(struct!.databaseName),
        database_options: ccJobDatabaseTableOutputOptionsPropertyToTerraform(struct!.databaseOptions),
        overwrite: cdktn.booleanToTerraform(struct!.overwrite),
        s3_options: ccJobS3TableOutputOptionsPropertyToTerraform(struct!.s3Options),
        table_name: cdktn.stringToTerraform(struct!.tableName),
    }
}


export function ccJobDataCatalogOutputPropertyToHclTerraform(struct?: CcJob.DataCatalogOutputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        catalog_id: {
            value: cdktn.stringToHclTerraform(struct!.catalogId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        database_name: {
            value: cdktn.stringToHclTerraform(struct!.databaseName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        database_options: {
            value: ccJobDatabaseTableOutputOptionsPropertyToHclTerraform(struct!.databaseOptions),
            isBlock: true,
            type: "struct",
            storageClassType: "DatabaseTableOutputOptionsProperty",
        },
        overwrite: {
            value: cdktn.booleanToHclTerraform(struct!.overwrite),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        s3_options: {
            value: ccJobS3TableOutputOptionsPropertyToHclTerraform(struct!.s3Options),
            isBlock: true,
            type: "struct",
            storageClassType: "S3TableOutputOptionsProperty",
        },
        table_name: {
            value: cdktn.stringToHclTerraform(struct!.tableName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccJobTempDirectoryPropertyToTerraform(struct?: CcJob.TempDirectoryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bucket: cdktn.stringToTerraform(struct!.bucket),
        bucket_owner: cdktn.stringToTerraform(struct!.bucketOwner),
        key: cdktn.stringToTerraform(struct!.key),
    }
}


export function ccJobTempDirectoryPropertyToHclTerraform(struct?: CcJob.TempDirectoryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bucket: {
            value: cdktn.stringToHclTerraform(struct!.bucket),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        bucket_owner: {
            value: cdktn.stringToHclTerraform(struct!.bucketOwner),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key: {
            value: cdktn.stringToHclTerraform(struct!.key),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccJobDatabaseOptionsPropertyToTerraform(struct?: CcJob.DatabaseOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        table_name: cdktn.stringToTerraform(struct!.tableName),
        temp_directory: ccJobTempDirectoryPropertyToTerraform(struct!.tempDirectory),
    }
}


export function ccJobDatabaseOptionsPropertyToHclTerraform(struct?: CcJob.DatabaseOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        table_name: {
            value: cdktn.stringToHclTerraform(struct!.tableName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        temp_directory: {
            value: ccJobTempDirectoryPropertyToHclTerraform(struct!.tempDirectory),
            isBlock: true,
            type: "struct",
            storageClassType: "TempDirectoryProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccJobDatabaseOutputPropertyToTerraform(struct?: CcJob.DatabaseOutputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        database_options: ccJobDatabaseOptionsPropertyToTerraform(struct!.databaseOptions),
        database_output_mode: cdktn.stringToTerraform(struct!.databaseOutputMode),
        glue_connection_name: cdktn.stringToTerraform(struct!.glueConnectionName),
    }
}


export function ccJobDatabaseOutputPropertyToHclTerraform(struct?: CcJob.DatabaseOutputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        database_options: {
            value: ccJobDatabaseOptionsPropertyToHclTerraform(struct!.databaseOptions),
            isBlock: true,
            type: "struct",
            storageClassType: "DatabaseOptionsProperty",
        },
        database_output_mode: {
            value: cdktn.stringToHclTerraform(struct!.databaseOutputMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        glue_connection_name: {
            value: cdktn.stringToHclTerraform(struct!.glueConnectionName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccJobJobSamplePropertyToTerraform(struct?: CcJob.JobSampleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        mode: cdktn.stringToTerraform(struct!.mode),
        size: cdktn.numberToTerraform(struct!.size),
    }
}


export function ccJobJobSamplePropertyToHclTerraform(struct?: CcJob.JobSampleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        mode: {
            value: cdktn.stringToHclTerraform(struct!.mode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        size: {
            value: cdktn.numberToHclTerraform(struct!.size),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccJobOutputLocationPropertyToTerraform(struct?: CcJob.OutputLocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bucket: cdktn.stringToTerraform(struct!.bucket),
        bucket_owner: cdktn.stringToTerraform(struct!.bucketOwner),
        key: cdktn.stringToTerraform(struct!.key),
    }
}


export function ccJobOutputLocationPropertyToHclTerraform(struct?: CcJob.OutputLocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bucket: {
            value: cdktn.stringToHclTerraform(struct!.bucket),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        bucket_owner: {
            value: cdktn.stringToHclTerraform(struct!.bucketOwner),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key: {
            value: cdktn.stringToHclTerraform(struct!.key),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccJobCsvOutputOptionsPropertyToTerraform(struct?: CcJob.CsvOutputOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        delimiter: cdktn.stringToTerraform(struct!.delimiter),
    }
}


export function ccJobCsvOutputOptionsPropertyToHclTerraform(struct?: CcJob.CsvOutputOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        delimiter: {
            value: cdktn.stringToHclTerraform(struct!.delimiter),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccJobOutputFormatOptionsPropertyToTerraform(struct?: CcJob.OutputFormatOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        csv: ccJobCsvOutputOptionsPropertyToTerraform(struct!.csv),
    }
}


export function ccJobOutputFormatOptionsPropertyToHclTerraform(struct?: CcJob.OutputFormatOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        csv: {
            value: ccJobCsvOutputOptionsPropertyToHclTerraform(struct!.csv),
            isBlock: true,
            type: "struct",
            storageClassType: "CsvOutputOptionsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccJobOutputsLocationPropertyToTerraform(struct?: CcJob.OutputsLocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bucket: cdktn.stringToTerraform(struct!.bucket),
        bucket_owner: cdktn.stringToTerraform(struct!.bucketOwner),
        key: cdktn.stringToTerraform(struct!.key),
    }
}


export function ccJobOutputsLocationPropertyToHclTerraform(struct?: CcJob.OutputsLocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bucket: {
            value: cdktn.stringToHclTerraform(struct!.bucket),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        bucket_owner: {
            value: cdktn.stringToHclTerraform(struct!.bucketOwner),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key: {
            value: cdktn.stringToHclTerraform(struct!.key),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccJobOutputPropertyToTerraform(struct?: CcJob.OutputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        compression_format: cdktn.stringToTerraform(struct!.compressionFormat),
        format: cdktn.stringToTerraform(struct!.format),
        format_options: ccJobOutputFormatOptionsPropertyToTerraform(struct!.formatOptions),
        location: ccJobOutputsLocationPropertyToTerraform(struct!.location),
        max_output_files: cdktn.numberToTerraform(struct!.maxOutputFiles),
        overwrite: cdktn.booleanToTerraform(struct!.overwrite),
        partition_columns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.partitionColumns),
    }
}


export function ccJobOutputPropertyToHclTerraform(struct?: CcJob.OutputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        compression_format: {
            value: cdktn.stringToHclTerraform(struct!.compressionFormat),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        format: {
            value: cdktn.stringToHclTerraform(struct!.format),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        format_options: {
            value: ccJobOutputFormatOptionsPropertyToHclTerraform(struct!.formatOptions),
            isBlock: true,
            type: "struct",
            storageClassType: "OutputFormatOptionsProperty",
        },
        location: {
            value: ccJobOutputsLocationPropertyToHclTerraform(struct!.location),
            isBlock: true,
            type: "struct",
            storageClassType: "OutputsLocationProperty",
        },
        max_output_files: {
            value: cdktn.numberToHclTerraform(struct!.maxOutputFiles),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        overwrite: {
            value: cdktn.booleanToHclTerraform(struct!.overwrite),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        partition_columns: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.partitionColumns),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccJobColumnSelectorPropertyToTerraform(struct?: CcJob.ColumnSelectorProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        regex: cdktn.stringToTerraform(struct!.regex),
    }
}


export function ccJobColumnSelectorPropertyToHclTerraform(struct?: CcJob.ColumnSelectorProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        regex: {
            value: cdktn.stringToHclTerraform(struct!.regex),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccJobStatisticOverridePropertyToTerraform(struct?: CcJob.StatisticOverrideProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        parameters: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.parameters),
        statistic: cdktn.stringToTerraform(struct!.statistic),
    }
}


export function ccJobStatisticOverridePropertyToHclTerraform(struct?: CcJob.StatisticOverrideProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        parameters: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.parameters),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        statistic: {
            value: cdktn.stringToHclTerraform(struct!.statistic),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccJobStatisticsConfigurationPropertyToTerraform(struct?: CcJob.StatisticsConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        included_statistics: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.includedStatistics),
        overrides: cdktn.listMapper(ccJobStatisticOverridePropertyToTerraform, false)(struct!.overrides),
    }
}


export function ccJobStatisticsConfigurationPropertyToHclTerraform(struct?: CcJob.StatisticsConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        included_statistics: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.includedStatistics),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        overrides: {
            value: cdktn.listMapperHcl(ccJobStatisticOverridePropertyToHclTerraform, false)(struct!.overrides),
            isBlock: true,
            type: "list",
            storageClassType: "StatisticOverridePropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccJobColumnStatisticsConfigurationPropertyToTerraform(struct?: CcJob.ColumnStatisticsConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        selectors: cdktn.listMapper(ccJobColumnSelectorPropertyToTerraform, false)(struct!.selectors),
        statistics: ccJobStatisticsConfigurationPropertyToTerraform(struct!.statistics),
    }
}


export function ccJobColumnStatisticsConfigurationPropertyToHclTerraform(struct?: CcJob.ColumnStatisticsConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        selectors: {
            value: cdktn.listMapperHcl(ccJobColumnSelectorPropertyToHclTerraform, false)(struct!.selectors),
            isBlock: true,
            type: "list",
            storageClassType: "ColumnSelectorPropertyList",
        },
        statistics: {
            value: ccJobStatisticsConfigurationPropertyToHclTerraform(struct!.statistics),
            isBlock: true,
            type: "struct",
            storageClassType: "StatisticsConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccJobOverridesPropertyToTerraform(struct?: CcJob.OverridesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        parameters: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.parameters),
        statistic: cdktn.stringToTerraform(struct!.statistic),
    }
}


export function ccJobOverridesPropertyToHclTerraform(struct?: CcJob.OverridesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        parameters: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.parameters),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        statistic: {
            value: cdktn.stringToHclTerraform(struct!.statistic),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccJobDatasetStatisticsConfigurationPropertyToTerraform(struct?: CcJob.DatasetStatisticsConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        included_statistics: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.includedStatistics),
        overrides: cdktn.listMapper(ccJobOverridesPropertyToTerraform, false)(struct!.overrides),
    }
}


export function ccJobDatasetStatisticsConfigurationPropertyToHclTerraform(struct?: CcJob.DatasetStatisticsConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        included_statistics: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.includedStatistics),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        overrides: {
            value: cdktn.listMapperHcl(ccJobOverridesPropertyToHclTerraform, false)(struct!.overrides),
            isBlock: true,
            type: "list",
            storageClassType: "OverridesPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccJobAllowedStatisticsPropertyToTerraform(struct?: CcJob.AllowedStatisticsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        statistics: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.statistics),
    }
}


export function ccJobAllowedStatisticsPropertyToHclTerraform(struct?: CcJob.AllowedStatisticsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        statistics: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.statistics),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccJobEntityDetectorConfigurationPropertyToTerraform(struct?: CcJob.EntityDetectorConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        allowed_statistics: ccJobAllowedStatisticsPropertyToTerraform(struct!.allowedStatistics),
        entity_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.entityTypes),
    }
}


export function ccJobEntityDetectorConfigurationPropertyToHclTerraform(struct?: CcJob.EntityDetectorConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        allowed_statistics: {
            value: ccJobAllowedStatisticsPropertyToHclTerraform(struct!.allowedStatistics),
            isBlock: true,
            type: "struct",
            storageClassType: "AllowedStatisticsProperty",
        },
        entity_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.entityTypes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccJobProfileColumnsPropertyToTerraform(struct?: CcJob.ProfileColumnsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        regex: cdktn.stringToTerraform(struct!.regex),
    }
}


export function ccJobProfileColumnsPropertyToHclTerraform(struct?: CcJob.ProfileColumnsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        regex: {
            value: cdktn.stringToHclTerraform(struct!.regex),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccJobProfileConfigurationPropertyToTerraform(struct?: CcJob.ProfileConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        column_statistics_configurations: cdktn.listMapper(ccJobColumnStatisticsConfigurationPropertyToTerraform, false)(struct!.columnStatisticsConfigurations),
        dataset_statistics_configuration: ccJobDatasetStatisticsConfigurationPropertyToTerraform(struct!.datasetStatisticsConfiguration),
        entity_detector_configuration: ccJobEntityDetectorConfigurationPropertyToTerraform(struct!.entityDetectorConfiguration),
        profile_columns: cdktn.listMapper(ccJobProfileColumnsPropertyToTerraform, false)(struct!.profileColumns),
    }
}


export function ccJobProfileConfigurationPropertyToHclTerraform(struct?: CcJob.ProfileConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        column_statistics_configurations: {
            value: cdktn.listMapperHcl(ccJobColumnStatisticsConfigurationPropertyToHclTerraform, false)(struct!.columnStatisticsConfigurations),
            isBlock: true,
            type: "list",
            storageClassType: "ColumnStatisticsConfigurationPropertyList",
        },
        dataset_statistics_configuration: {
            value: ccJobDatasetStatisticsConfigurationPropertyToHclTerraform(struct!.datasetStatisticsConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "DatasetStatisticsConfigurationProperty",
        },
        entity_detector_configuration: {
            value: ccJobEntityDetectorConfigurationPropertyToHclTerraform(struct!.entityDetectorConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "EntityDetectorConfigurationProperty",
        },
        profile_columns: {
            value: cdktn.listMapperHcl(ccJobProfileColumnsPropertyToHclTerraform, false)(struct!.profileColumns),
            isBlock: true,
            type: "list",
            storageClassType: "ProfileColumnsPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccJobRecipePropertyToTerraform(struct?: CcJob.RecipeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        version: cdktn.stringToTerraform(struct!.version),
    }
}


export function ccJobRecipePropertyToHclTerraform(struct?: CcJob.RecipeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        version: {
            value: cdktn.stringToHclTerraform(struct!.version),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccJobTagPropertyToTerraform(struct?: CcJob.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccJobTagPropertyToHclTerraform(struct?: CcJob.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        key: {
            value: cdktn.stringToHclTerraform(struct!.key),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktn.stringToHclTerraform(struct!.value),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccJobValidationConfigurationPropertyToTerraform(struct?: CcJob.ValidationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        ruleset_arn: cdktn.stringToTerraform(struct!.rulesetArn),
        validation_mode: cdktn.stringToTerraform(struct!.validationMode),
    }
}


export function ccJobValidationConfigurationPropertyToHclTerraform(struct?: CcJob.ValidationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        ruleset_arn: {
            value: cdktn.stringToHclTerraform(struct!.rulesetArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        validation_mode: {
            value: cdktn.stringToHclTerraform(struct!.validationMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcJob {
export interface S3LocationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#bucket CcJob#bucket}
    */
    readonly bucket?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#bucket_owner CcJob#bucket_owner}
    */
    readonly bucketOwner?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#key CcJob#key}
    */
    readonly key?: string;
}
export class S3LocationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3LocationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bucket !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucket = this._bucket;
        }
        if (this._bucketOwner !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketOwner = this._bucketOwner;
        }
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3LocationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bucket = undefined;
            this._bucketOwner = undefined;
            this._key = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bucket = value.bucket;
            this._bucketOwner = value.bucketOwner;
            this._key = value.key;
        }
    }

    // bucket - computed: true, optional: true, required: false
    private _bucket?: string; 
    public get bucket() {
        return this.getStringAttribute('bucket');
    }
    public set bucket(value: string) {
        this._bucket = value;
    }
    public resetBucket() {
        this._bucket = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketInput() {
        return this._bucket;
    }

    // bucket_owner - computed: true, optional: true, required: false
    private _bucketOwner?: string; 
    public get bucketOwner() {
        return this.getStringAttribute('bucket_owner');
    }
    public set bucketOwner(value: string) {
        this._bucketOwner = value;
    }
    public resetBucketOwner() {
        this._bucketOwner = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketOwnerInput() {
        return this._bucketOwner;
    }

    // key - computed: true, optional: true, required: false
    private _key?: string; 
    public get key() {
        return this.getStringAttribute('key');
    }
    public set key(value: string) {
        this._key = value;
    }
    public resetKey() {
        this._key = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyInput() {
        return this._key;
    }
}
export interface DatabaseTableOutputOptionsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#table_name CcJob#table_name}
    */
    readonly tableName?: string;
    /**
    * S3 Output location
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#temp_directory CcJob#temp_directory}
    */
    readonly tempDirectory?: S3LocationProperty;
}
export class DatabaseTableOutputOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DatabaseTableOutputOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._tableName !== undefined) {
            hasAnyValues = true;
            internalValueResult.tableName = this._tableName;
        }
        if (this._tempDirectory?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tempDirectory = this._tempDirectory?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DatabaseTableOutputOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._tableName = undefined;
            this._tempDirectory.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._tableName = value.tableName;
            this._tempDirectory.internalValue = value.tempDirectory;
        }
    }

    // table_name - computed: true, optional: true, required: false
    private _tableName?: string; 
    public get tableName() {
        return this.getStringAttribute('table_name');
    }
    public set tableName(value: string) {
        this._tableName = value;
    }
    public resetTableName() {
        this._tableName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tableNameInput() {
        return this._tableName;
    }

    // temp_directory - computed: true, optional: true, required: false
    private _tempDirectory = new S3LocationPropertyOutputReference(this, "temp_directory");
    public get tempDirectory() {
        return this._tempDirectory;
    }
    public putTempDirectory(value: S3LocationProperty) {
        this._tempDirectory.internalValue = value;
    }
    public resetTempDirectory() {
        this._tempDirectory.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tempDirectoryInput() {
        return this._tempDirectory.internalValue;
    }
}
export interface DataCatalogOutputsS3OptionsLocationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#bucket CcJob#bucket}
    */
    readonly bucket?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#bucket_owner CcJob#bucket_owner}
    */
    readonly bucketOwner?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#key CcJob#key}
    */
    readonly key?: string;
}
export class DataCatalogOutputsS3OptionsLocationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DataCatalogOutputsS3OptionsLocationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bucket !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucket = this._bucket;
        }
        if (this._bucketOwner !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketOwner = this._bucketOwner;
        }
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DataCatalogOutputsS3OptionsLocationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bucket = undefined;
            this._bucketOwner = undefined;
            this._key = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bucket = value.bucket;
            this._bucketOwner = value.bucketOwner;
            this._key = value.key;
        }
    }

    // bucket - computed: true, optional: true, required: false
    private _bucket?: string; 
    public get bucket() {
        return this.getStringAttribute('bucket');
    }
    public set bucket(value: string) {
        this._bucket = value;
    }
    public resetBucket() {
        this._bucket = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketInput() {
        return this._bucket;
    }

    // bucket_owner - computed: true, optional: true, required: false
    private _bucketOwner?: string; 
    public get bucketOwner() {
        return this.getStringAttribute('bucket_owner');
    }
    public set bucketOwner(value: string) {
        this._bucketOwner = value;
    }
    public resetBucketOwner() {
        this._bucketOwner = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketOwnerInput() {
        return this._bucketOwner;
    }

    // key - computed: true, optional: true, required: false
    private _key?: string; 
    public get key() {
        return this.getStringAttribute('key');
    }
    public set key(value: string) {
        this._key = value;
    }
    public resetKey() {
        this._key = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyInput() {
        return this._key;
    }
}
export interface S3TableOutputOptionsProperty {
    /**
    * S3 Output location
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#location CcJob#location}
    */
    readonly location?: DataCatalogOutputsS3OptionsLocationProperty;
}
export class S3TableOutputOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3TableOutputOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._location?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.location = this._location?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3TableOutputOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._location.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._location.internalValue = value.location;
        }
    }

    // location - computed: true, optional: true, required: false
    private _location = new DataCatalogOutputsS3OptionsLocationPropertyOutputReference(this, "location");
    public get location() {
        return this._location;
    }
    public putLocation(value: DataCatalogOutputsS3OptionsLocationProperty) {
        this._location.internalValue = value;
    }
    public resetLocation() {
        this._location.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get locationInput() {
        return this._location.internalValue;
    }
}
export interface DataCatalogOutputProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#catalog_id CcJob#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#database_name CcJob#database_name}
    */
    readonly databaseName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#database_options CcJob#database_options}
    */
    readonly databaseOptions?: DatabaseTableOutputOptionsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#overwrite CcJob#overwrite}
    */
    readonly overwrite?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#s3_options CcJob#s3_options}
    */
    readonly s3Options?: S3TableOutputOptionsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#table_name CcJob#table_name}
    */
    readonly tableName?: string;
}
export class DataCatalogOutputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): DataCatalogOutputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._catalogId !== undefined) {
            hasAnyValues = true;
            internalValueResult.catalogId = this._catalogId;
        }
        if (this._databaseName !== undefined) {
            hasAnyValues = true;
            internalValueResult.databaseName = this._databaseName;
        }
        if (this._databaseOptions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.databaseOptions = this._databaseOptions?.internalValue;
        }
        if (this._overwrite !== undefined) {
            hasAnyValues = true;
            internalValueResult.overwrite = this._overwrite;
        }
        if (this._s3Options?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Options = this._s3Options?.internalValue;
        }
        if (this._tableName !== undefined) {
            hasAnyValues = true;
            internalValueResult.tableName = this._tableName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DataCatalogOutputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._catalogId = undefined;
            this._databaseName = undefined;
            this._databaseOptions.internalValue = undefined;
            this._overwrite = undefined;
            this._s3Options.internalValue = undefined;
            this._tableName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._catalogId = value.catalogId;
            this._databaseName = value.databaseName;
            this._databaseOptions.internalValue = value.databaseOptions;
            this._overwrite = value.overwrite;
            this._s3Options.internalValue = value.s3Options;
            this._tableName = value.tableName;
        }
    }

    // catalog_id - computed: true, optional: true, required: false
    private _catalogId?: string; 
    public get catalogId() {
        return this.getStringAttribute('catalog_id');
    }
    public set catalogId(value: string) {
        this._catalogId = value;
    }
    public resetCatalogId() {
        this._catalogId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get catalogIdInput() {
        return this._catalogId;
    }

    // database_name - computed: true, optional: true, required: false
    private _databaseName?: string; 
    public get databaseName() {
        return this.getStringAttribute('database_name');
    }
    public set databaseName(value: string) {
        this._databaseName = value;
    }
    public resetDatabaseName() {
        this._databaseName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseNameInput() {
        return this._databaseName;
    }

    // database_options - computed: true, optional: true, required: false
    private _databaseOptions = new DatabaseTableOutputOptionsPropertyOutputReference(this, "database_options");
    public get databaseOptions() {
        return this._databaseOptions;
    }
    public putDatabaseOptions(value: DatabaseTableOutputOptionsProperty) {
        this._databaseOptions.internalValue = value;
    }
    public resetDatabaseOptions() {
        this._databaseOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseOptionsInput() {
        return this._databaseOptions.internalValue;
    }

    // overwrite - computed: true, optional: true, required: false
    private _overwrite?: boolean | cdktn.IResolvable; 
    public get overwrite() {
        return this.getBooleanAttribute('overwrite');
    }
    public set overwrite(value: boolean | cdktn.IResolvable) {
        this._overwrite = value;
    }
    public resetOverwrite() {
        this._overwrite = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get overwriteInput() {
        return this._overwrite;
    }

    // s3_options - computed: true, optional: true, required: false
    private _s3Options = new S3TableOutputOptionsPropertyOutputReference(this, "s3_options");
    public get s3Options() {
        return this._s3Options;
    }
    public putS3Options(value: S3TableOutputOptionsProperty) {
        this._s3Options.internalValue = value;
    }
    public resetS3Options() {
        this._s3Options.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3OptionsInput() {
        return this._s3Options.internalValue;
    }

    // table_name - computed: true, optional: true, required: false
    private _tableName?: string; 
    public get tableName() {
        return this.getStringAttribute('table_name');
    }
    public set tableName(value: string) {
        this._tableName = value;
    }
    public resetTableName() {
        this._tableName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tableNameInput() {
        return this._tableName;
    }
}

export class DataCatalogOutputPropertyList extends cdktn.ComplexList {
    public internalValue? : DataCatalogOutputProperty[] | cdktn.IResolvable

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
        super(terraformResource, terraformAttribute, wrapsSet);
    }

    /**
    * @param index the index of the item to return
    */
    public get(index: number): DataCatalogOutputPropertyOutputReference {
        return new DataCatalogOutputPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TempDirectoryProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#bucket CcJob#bucket}
    */
    readonly bucket?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#bucket_owner CcJob#bucket_owner}
    */
    readonly bucketOwner?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#key CcJob#key}
    */
    readonly key?: string;
}
export class TempDirectoryPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TempDirectoryProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bucket !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucket = this._bucket;
        }
        if (this._bucketOwner !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketOwner = this._bucketOwner;
        }
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TempDirectoryProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bucket = undefined;
            this._bucketOwner = undefined;
            this._key = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bucket = value.bucket;
            this._bucketOwner = value.bucketOwner;
            this._key = value.key;
        }
    }

    // bucket - computed: true, optional: true, required: false
    private _bucket?: string; 
    public get bucket() {
        return this.getStringAttribute('bucket');
    }
    public set bucket(value: string) {
        this._bucket = value;
    }
    public resetBucket() {
        this._bucket = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketInput() {
        return this._bucket;
    }

    // bucket_owner - computed: true, optional: true, required: false
    private _bucketOwner?: string; 
    public get bucketOwner() {
        return this.getStringAttribute('bucket_owner');
    }
    public set bucketOwner(value: string) {
        this._bucketOwner = value;
    }
    public resetBucketOwner() {
        this._bucketOwner = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketOwnerInput() {
        return this._bucketOwner;
    }

    // key - computed: true, optional: true, required: false
    private _key?: string; 
    public get key() {
        return this.getStringAttribute('key');
    }
    public set key(value: string) {
        this._key = value;
    }
    public resetKey() {
        this._key = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyInput() {
        return this._key;
    }
}
export interface DatabaseOptionsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#table_name CcJob#table_name}
    */
    readonly tableName?: string;
    /**
    * S3 Output location
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#temp_directory CcJob#temp_directory}
    */
    readonly tempDirectory?: TempDirectoryProperty;
}
export class DatabaseOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DatabaseOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._tableName !== undefined) {
            hasAnyValues = true;
            internalValueResult.tableName = this._tableName;
        }
        if (this._tempDirectory?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tempDirectory = this._tempDirectory?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DatabaseOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._tableName = undefined;
            this._tempDirectory.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._tableName = value.tableName;
            this._tempDirectory.internalValue = value.tempDirectory;
        }
    }

    // table_name - computed: true, optional: true, required: false
    private _tableName?: string; 
    public get tableName() {
        return this.getStringAttribute('table_name');
    }
    public set tableName(value: string) {
        this._tableName = value;
    }
    public resetTableName() {
        this._tableName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tableNameInput() {
        return this._tableName;
    }

    // temp_directory - computed: true, optional: true, required: false
    private _tempDirectory = new TempDirectoryPropertyOutputReference(this, "temp_directory");
    public get tempDirectory() {
        return this._tempDirectory;
    }
    public putTempDirectory(value: TempDirectoryProperty) {
        this._tempDirectory.internalValue = value;
    }
    public resetTempDirectory() {
        this._tempDirectory.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tempDirectoryInput() {
        return this._tempDirectory.internalValue;
    }
}
export interface DatabaseOutputProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#database_options CcJob#database_options}
    */
    readonly databaseOptions?: DatabaseOptionsProperty;
    /**
    * Database table name
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#database_output_mode CcJob#database_output_mode}
    */
    readonly databaseOutputMode?: string;
    /**
    * Glue connection name
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#glue_connection_name CcJob#glue_connection_name}
    */
    readonly glueConnectionName?: string;
}
export class DatabaseOutputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): DatabaseOutputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._databaseOptions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.databaseOptions = this._databaseOptions?.internalValue;
        }
        if (this._databaseOutputMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.databaseOutputMode = this._databaseOutputMode;
        }
        if (this._glueConnectionName !== undefined) {
            hasAnyValues = true;
            internalValueResult.glueConnectionName = this._glueConnectionName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DatabaseOutputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._databaseOptions.internalValue = undefined;
            this._databaseOutputMode = undefined;
            this._glueConnectionName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._databaseOptions.internalValue = value.databaseOptions;
            this._databaseOutputMode = value.databaseOutputMode;
            this._glueConnectionName = value.glueConnectionName;
        }
    }

    // database_options - computed: true, optional: true, required: false
    private _databaseOptions = new DatabaseOptionsPropertyOutputReference(this, "database_options");
    public get databaseOptions() {
        return this._databaseOptions;
    }
    public putDatabaseOptions(value: DatabaseOptionsProperty) {
        this._databaseOptions.internalValue = value;
    }
    public resetDatabaseOptions() {
        this._databaseOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseOptionsInput() {
        return this._databaseOptions.internalValue;
    }

    // database_output_mode - computed: true, optional: true, required: false
    private _databaseOutputMode?: string; 
    public get databaseOutputMode() {
        return this.getStringAttribute('database_output_mode');
    }
    public set databaseOutputMode(value: string) {
        this._databaseOutputMode = value;
    }
    public resetDatabaseOutputMode() {
        this._databaseOutputMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseOutputModeInput() {
        return this._databaseOutputMode;
    }

    // glue_connection_name - computed: true, optional: true, required: false
    private _glueConnectionName?: string; 
    public get glueConnectionName() {
        return this.getStringAttribute('glue_connection_name');
    }
    public set glueConnectionName(value: string) {
        this._glueConnectionName = value;
    }
    public resetGlueConnectionName() {
        this._glueConnectionName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get glueConnectionNameInput() {
        return this._glueConnectionName;
    }
}

export class DatabaseOutputPropertyList extends cdktn.ComplexList {
    public internalValue? : DatabaseOutputProperty[] | cdktn.IResolvable

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
        super(terraformResource, terraformAttribute, wrapsSet);
    }

    /**
    * @param index the index of the item to return
    */
    public get(index: number): DatabaseOutputPropertyOutputReference {
        return new DatabaseOutputPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface JobSampleProperty {
    /**
    * Sample configuration mode for profile jobs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#mode CcJob#mode}
    */
    readonly mode?: string;
    /**
    * Sample configuration size for profile jobs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#size CcJob#size}
    */
    readonly size?: number;
}
export class JobSamplePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): JobSampleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._mode !== undefined) {
            hasAnyValues = true;
            internalValueResult.mode = this._mode;
        }
        if (this._size !== undefined) {
            hasAnyValues = true;
            internalValueResult.size = this._size;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: JobSampleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._mode = undefined;
            this._size = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._mode = value.mode;
            this._size = value.size;
        }
    }

    // mode - computed: true, optional: true, required: false
    private _mode?: string; 
    public get mode() {
        return this.getStringAttribute('mode');
    }
    public set mode(value: string) {
        this._mode = value;
    }
    public resetMode() {
        this._mode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modeInput() {
        return this._mode;
    }

    // size - computed: true, optional: true, required: false
    private _size?: number; 
    public get size() {
        return this.getNumberAttribute('size');
    }
    public set size(value: number) {
        this._size = value;
    }
    public resetSize() {
        this._size = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sizeInput() {
        return this._size;
    }
}
export interface OutputLocationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#bucket CcJob#bucket}
    */
    readonly bucket?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#bucket_owner CcJob#bucket_owner}
    */
    readonly bucketOwner?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#key CcJob#key}
    */
    readonly key?: string;
}
export class OutputLocationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OutputLocationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bucket !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucket = this._bucket;
        }
        if (this._bucketOwner !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketOwner = this._bucketOwner;
        }
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OutputLocationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bucket = undefined;
            this._bucketOwner = undefined;
            this._key = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bucket = value.bucket;
            this._bucketOwner = value.bucketOwner;
            this._key = value.key;
        }
    }

    // bucket - computed: true, optional: true, required: false
    private _bucket?: string; 
    public get bucket() {
        return this.getStringAttribute('bucket');
    }
    public set bucket(value: string) {
        this._bucket = value;
    }
    public resetBucket() {
        this._bucket = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketInput() {
        return this._bucket;
    }

    // bucket_owner - computed: true, optional: true, required: false
    private _bucketOwner?: string; 
    public get bucketOwner() {
        return this.getStringAttribute('bucket_owner');
    }
    public set bucketOwner(value: string) {
        this._bucketOwner = value;
    }
    public resetBucketOwner() {
        this._bucketOwner = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketOwnerInput() {
        return this._bucketOwner;
    }

    // key - computed: true, optional: true, required: false
    private _key?: string; 
    public get key() {
        return this.getStringAttribute('key');
    }
    public set key(value: string) {
        this._key = value;
    }
    public resetKey() {
        this._key = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyInput() {
        return this._key;
    }
}
export interface CsvOutputOptionsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#delimiter CcJob#delimiter}
    */
    readonly delimiter?: string;
}
export class CsvOutputOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CsvOutputOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._delimiter !== undefined) {
            hasAnyValues = true;
            internalValueResult.delimiter = this._delimiter;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CsvOutputOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._delimiter = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._delimiter = value.delimiter;
        }
    }

    // delimiter - computed: true, optional: true, required: false
    private _delimiter?: string; 
    public get delimiter() {
        return this.getStringAttribute('delimiter');
    }
    public set delimiter(value: string) {
        this._delimiter = value;
    }
    public resetDelimiter() {
        this._delimiter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get delimiterInput() {
        return this._delimiter;
    }
}
export interface OutputFormatOptionsProperty {
    /**
    * Output Csv options
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#csv CcJob#csv}
    */
    readonly csv?: CsvOutputOptionsProperty;
}
export class OutputFormatOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OutputFormatOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._csv?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.csv = this._csv?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OutputFormatOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._csv.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._csv.internalValue = value.csv;
        }
    }

    // csv - computed: true, optional: true, required: false
    private _csv = new CsvOutputOptionsPropertyOutputReference(this, "csv");
    public get csv() {
        return this._csv;
    }
    public putCsv(value: CsvOutputOptionsProperty) {
        this._csv.internalValue = value;
    }
    public resetCsv() {
        this._csv.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get csvInput() {
        return this._csv.internalValue;
    }
}
export interface OutputsLocationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#bucket CcJob#bucket}
    */
    readonly bucket?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#bucket_owner CcJob#bucket_owner}
    */
    readonly bucketOwner?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#key CcJob#key}
    */
    readonly key?: string;
}
export class OutputsLocationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OutputsLocationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bucket !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucket = this._bucket;
        }
        if (this._bucketOwner !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketOwner = this._bucketOwner;
        }
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OutputsLocationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bucket = undefined;
            this._bucketOwner = undefined;
            this._key = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bucket = value.bucket;
            this._bucketOwner = value.bucketOwner;
            this._key = value.key;
        }
    }

    // bucket - computed: true, optional: true, required: false
    private _bucket?: string; 
    public get bucket() {
        return this.getStringAttribute('bucket');
    }
    public set bucket(value: string) {
        this._bucket = value;
    }
    public resetBucket() {
        this._bucket = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketInput() {
        return this._bucket;
    }

    // bucket_owner - computed: true, optional: true, required: false
    private _bucketOwner?: string; 
    public get bucketOwner() {
        return this.getStringAttribute('bucket_owner');
    }
    public set bucketOwner(value: string) {
        this._bucketOwner = value;
    }
    public resetBucketOwner() {
        this._bucketOwner = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketOwnerInput() {
        return this._bucketOwner;
    }

    // key - computed: true, optional: true, required: false
    private _key?: string; 
    public get key() {
        return this.getStringAttribute('key');
    }
    public set key(value: string) {
        this._key = value;
    }
    public resetKey() {
        this._key = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyInput() {
        return this._key;
    }
}
export interface OutputProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#compression_format CcJob#compression_format}
    */
    readonly compressionFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#format CcJob#format}
    */
    readonly format?: string;
    /**
    * Format options for job Output
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#format_options CcJob#format_options}
    */
    readonly formatOptions?: OutputFormatOptionsProperty;
    /**
    * S3 Output location
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#location CcJob#location}
    */
    readonly location?: OutputsLocationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#max_output_files CcJob#max_output_files}
    */
    readonly maxOutputFiles?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#overwrite CcJob#overwrite}
    */
    readonly overwrite?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#partition_columns CcJob#partition_columns}
    */
    readonly partitionColumns?: string[];
}
export class OutputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): OutputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._compressionFormat !== undefined) {
            hasAnyValues = true;
            internalValueResult.compressionFormat = this._compressionFormat;
        }
        if (this._format !== undefined) {
            hasAnyValues = true;
            internalValueResult.format = this._format;
        }
        if (this._formatOptions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.formatOptions = this._formatOptions?.internalValue;
        }
        if (this._location?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.location = this._location?.internalValue;
        }
        if (this._maxOutputFiles !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxOutputFiles = this._maxOutputFiles;
        }
        if (this._overwrite !== undefined) {
            hasAnyValues = true;
            internalValueResult.overwrite = this._overwrite;
        }
        if (this._partitionColumns !== undefined) {
            hasAnyValues = true;
            internalValueResult.partitionColumns = this._partitionColumns;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OutputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._compressionFormat = undefined;
            this._format = undefined;
            this._formatOptions.internalValue = undefined;
            this._location.internalValue = undefined;
            this._maxOutputFiles = undefined;
            this._overwrite = undefined;
            this._partitionColumns = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._compressionFormat = value.compressionFormat;
            this._format = value.format;
            this._formatOptions.internalValue = value.formatOptions;
            this._location.internalValue = value.location;
            this._maxOutputFiles = value.maxOutputFiles;
            this._overwrite = value.overwrite;
            this._partitionColumns = value.partitionColumns;
        }
    }

    // compression_format - computed: true, optional: true, required: false
    private _compressionFormat?: string; 
    public get compressionFormat() {
        return this.getStringAttribute('compression_format');
    }
    public set compressionFormat(value: string) {
        this._compressionFormat = value;
    }
    public resetCompressionFormat() {
        this._compressionFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get compressionFormatInput() {
        return this._compressionFormat;
    }

    // format - computed: true, optional: true, required: false
    private _format?: string; 
    public get format() {
        return this.getStringAttribute('format');
    }
    public set format(value: string) {
        this._format = value;
    }
    public resetFormat() {
        this._format = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get formatInput() {
        return this._format;
    }

    // format_options - computed: true, optional: true, required: false
    private _formatOptions = new OutputFormatOptionsPropertyOutputReference(this, "format_options");
    public get formatOptions() {
        return this._formatOptions;
    }
    public putFormatOptions(value: OutputFormatOptionsProperty) {
        this._formatOptions.internalValue = value;
    }
    public resetFormatOptions() {
        this._formatOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get formatOptionsInput() {
        return this._formatOptions.internalValue;
    }

    // location - computed: true, optional: true, required: false
    private _location = new OutputsLocationPropertyOutputReference(this, "location");
    public get location() {
        return this._location;
    }
    public putLocation(value: OutputsLocationProperty) {
        this._location.internalValue = value;
    }
    public resetLocation() {
        this._location.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get locationInput() {
        return this._location.internalValue;
    }

    // max_output_files - computed: true, optional: true, required: false
    private _maxOutputFiles?: number; 
    public get maxOutputFiles() {
        return this.getNumberAttribute('max_output_files');
    }
    public set maxOutputFiles(value: number) {
        this._maxOutputFiles = value;
    }
    public resetMaxOutputFiles() {
        this._maxOutputFiles = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxOutputFilesInput() {
        return this._maxOutputFiles;
    }

    // overwrite - computed: true, optional: true, required: false
    private _overwrite?: boolean | cdktn.IResolvable; 
    public get overwrite() {
        return this.getBooleanAttribute('overwrite');
    }
    public set overwrite(value: boolean | cdktn.IResolvable) {
        this._overwrite = value;
    }
    public resetOverwrite() {
        this._overwrite = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get overwriteInput() {
        return this._overwrite;
    }

    // partition_columns - computed: true, optional: true, required: false
    private _partitionColumns?: string[]; 
    public get partitionColumns() {
        return this.getListAttribute('partition_columns');
    }
    public set partitionColumns(value: string[]) {
        this._partitionColumns = value;
    }
    public resetPartitionColumns() {
        this._partitionColumns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get partitionColumnsInput() {
        return this._partitionColumns;
    }
}

export class OutputPropertyList extends cdktn.ComplexList {
    public internalValue? : OutputProperty[] | cdktn.IResolvable

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
        super(terraformResource, terraformAttribute, wrapsSet);
    }

    /**
    * @param index the index of the item to return
    */
    public get(index: number): OutputPropertyOutputReference {
        return new OutputPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ColumnSelectorProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#name CcJob#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#regex CcJob#regex}
    */
    readonly regex?: string;
}
export class ColumnSelectorPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): ColumnSelectorProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._regex !== undefined) {
            hasAnyValues = true;
            internalValueResult.regex = this._regex;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ColumnSelectorProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._regex = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._regex = value.regex;
        }
    }

    // name - computed: true, optional: true, required: false
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    public resetName() {
        this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
    }

    // regex - computed: true, optional: true, required: false
    private _regex?: string; 
    public get regex() {
        return this.getStringAttribute('regex');
    }
    public set regex(value: string) {
        this._regex = value;
    }
    public resetRegex() {
        this._regex = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get regexInput() {
        return this._regex;
    }
}

export class ColumnSelectorPropertyList extends cdktn.ComplexList {
    public internalValue? : ColumnSelectorProperty[] | cdktn.IResolvable

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
        super(terraformResource, terraformAttribute, wrapsSet);
    }

    /**
    * @param index the index of the item to return
    */
    public get(index: number): ColumnSelectorPropertyOutputReference {
        return new ColumnSelectorPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface StatisticOverrideProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#parameters CcJob#parameters}
    */
    readonly parameters?: { [key: string]: string };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#statistic CcJob#statistic}
    */
    readonly statistic?: string;
}
export class StatisticOverridePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): StatisticOverrideProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._parameters !== undefined) {
            hasAnyValues = true;
            internalValueResult.parameters = this._parameters;
        }
        if (this._statistic !== undefined) {
            hasAnyValues = true;
            internalValueResult.statistic = this._statistic;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StatisticOverrideProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._parameters = undefined;
            this._statistic = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._parameters = value.parameters;
            this._statistic = value.statistic;
        }
    }

    // parameters - computed: true, optional: true, required: false
    private _parameters?: { [key: string]: string }; 
    public get parameters() {
        return this.getStringMapAttribute('parameters');
    }
    public set parameters(value: { [key: string]: string }) {
        this._parameters = value;
    }
    public resetParameters() {
        this._parameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parametersInput() {
        return this._parameters;
    }

    // statistic - computed: true, optional: true, required: false
    private _statistic?: string; 
    public get statistic() {
        return this.getStringAttribute('statistic');
    }
    public set statistic(value: string) {
        this._statistic = value;
    }
    public resetStatistic() {
        this._statistic = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statisticInput() {
        return this._statistic;
    }
}

export class StatisticOverridePropertyList extends cdktn.ComplexList {
    public internalValue? : StatisticOverrideProperty[] | cdktn.IResolvable

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
        super(terraformResource, terraformAttribute, wrapsSet);
    }

    /**
    * @param index the index of the item to return
    */
    public get(index: number): StatisticOverridePropertyOutputReference {
        return new StatisticOverridePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface StatisticsConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#included_statistics CcJob#included_statistics}
    */
    readonly includedStatistics?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#overrides CcJob#overrides}
    */
    readonly overrides?: StatisticOverrideProperty[] | cdktn.IResolvable;
}
export class StatisticsConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StatisticsConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._includedStatistics !== undefined) {
            hasAnyValues = true;
            internalValueResult.includedStatistics = this._includedStatistics;
        }
        if (this._overrides?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.overrides = this._overrides?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StatisticsConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._includedStatistics = undefined;
            this._overrides.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._includedStatistics = value.includedStatistics;
            this._overrides.internalValue = value.overrides;
        }
    }

    // included_statistics - computed: true, optional: true, required: false
    private _includedStatistics?: string[]; 
    public get includedStatistics() {
        return this.getListAttribute('included_statistics');
    }
    public set includedStatistics(value: string[]) {
        this._includedStatistics = value;
    }
    public resetIncludedStatistics() {
        this._includedStatistics = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get includedStatisticsInput() {
        return this._includedStatistics;
    }

    // overrides - computed: true, optional: true, required: false
    private _overrides = new StatisticOverridePropertyList(this, "overrides", false);
    public get overrides() {
        return this._overrides;
    }
    public putOverrides(value: StatisticOverrideProperty[] | cdktn.IResolvable) {
        this._overrides.internalValue = value;
    }
    public resetOverrides() {
        this._overrides.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get overridesInput() {
        return this._overrides.internalValue;
    }
}
export interface ColumnStatisticsConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#selectors CcJob#selectors}
    */
    readonly selectors?: ColumnSelectorProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#statistics CcJob#statistics}
    */
    readonly statistics?: StatisticsConfigurationProperty;
}
export class ColumnStatisticsConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): ColumnStatisticsConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._selectors?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.selectors = this._selectors?.internalValue;
        }
        if (this._statistics?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.statistics = this._statistics?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ColumnStatisticsConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._selectors.internalValue = undefined;
            this._statistics.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._selectors.internalValue = value.selectors;
            this._statistics.internalValue = value.statistics;
        }
    }

    // selectors - computed: true, optional: true, required: false
    private _selectors = new ColumnSelectorPropertyList(this, "selectors", false);
    public get selectors() {
        return this._selectors;
    }
    public putSelectors(value: ColumnSelectorProperty[] | cdktn.IResolvable) {
        this._selectors.internalValue = value;
    }
    public resetSelectors() {
        this._selectors.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get selectorsInput() {
        return this._selectors.internalValue;
    }

    // statistics - computed: true, optional: true, required: false
    private _statistics = new StatisticsConfigurationPropertyOutputReference(this, "statistics");
    public get statistics() {
        return this._statistics;
    }
    public putStatistics(value: StatisticsConfigurationProperty) {
        this._statistics.internalValue = value;
    }
    public resetStatistics() {
        this._statistics.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statisticsInput() {
        return this._statistics.internalValue;
    }
}

export class ColumnStatisticsConfigurationPropertyList extends cdktn.ComplexList {
    public internalValue? : ColumnStatisticsConfigurationProperty[] | cdktn.IResolvable

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
        super(terraformResource, terraformAttribute, wrapsSet);
    }

    /**
    * @param index the index of the item to return
    */
    public get(index: number): ColumnStatisticsConfigurationPropertyOutputReference {
        return new ColumnStatisticsConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface OverridesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#parameters CcJob#parameters}
    */
    readonly parameters?: { [key: string]: string };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#statistic CcJob#statistic}
    */
    readonly statistic?: string;
}
export class OverridesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): OverridesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._parameters !== undefined) {
            hasAnyValues = true;
            internalValueResult.parameters = this._parameters;
        }
        if (this._statistic !== undefined) {
            hasAnyValues = true;
            internalValueResult.statistic = this._statistic;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OverridesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._parameters = undefined;
            this._statistic = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._parameters = value.parameters;
            this._statistic = value.statistic;
        }
    }

    // parameters - computed: true, optional: true, required: false
    private _parameters?: { [key: string]: string }; 
    public get parameters() {
        return this.getStringMapAttribute('parameters');
    }
    public set parameters(value: { [key: string]: string }) {
        this._parameters = value;
    }
    public resetParameters() {
        this._parameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parametersInput() {
        return this._parameters;
    }

    // statistic - computed: true, optional: true, required: false
    private _statistic?: string; 
    public get statistic() {
        return this.getStringAttribute('statistic');
    }
    public set statistic(value: string) {
        this._statistic = value;
    }
    public resetStatistic() {
        this._statistic = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statisticInput() {
        return this._statistic;
    }
}

export class OverridesPropertyList extends cdktn.ComplexList {
    public internalValue? : OverridesProperty[] | cdktn.IResolvable

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
        super(terraformResource, terraformAttribute, wrapsSet);
    }

    /**
    * @param index the index of the item to return
    */
    public get(index: number): OverridesPropertyOutputReference {
        return new OverridesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface DatasetStatisticsConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#included_statistics CcJob#included_statistics}
    */
    readonly includedStatistics?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#overrides CcJob#overrides}
    */
    readonly overrides?: OverridesProperty[] | cdktn.IResolvable;
}
export class DatasetStatisticsConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DatasetStatisticsConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._includedStatistics !== undefined) {
            hasAnyValues = true;
            internalValueResult.includedStatistics = this._includedStatistics;
        }
        if (this._overrides?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.overrides = this._overrides?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DatasetStatisticsConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._includedStatistics = undefined;
            this._overrides.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._includedStatistics = value.includedStatistics;
            this._overrides.internalValue = value.overrides;
        }
    }

    // included_statistics - computed: true, optional: true, required: false
    private _includedStatistics?: string[]; 
    public get includedStatistics() {
        return this.getListAttribute('included_statistics');
    }
    public set includedStatistics(value: string[]) {
        this._includedStatistics = value;
    }
    public resetIncludedStatistics() {
        this._includedStatistics = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get includedStatisticsInput() {
        return this._includedStatistics;
    }

    // overrides - computed: true, optional: true, required: false
    private _overrides = new OverridesPropertyList(this, "overrides", false);
    public get overrides() {
        return this._overrides;
    }
    public putOverrides(value: OverridesProperty[] | cdktn.IResolvable) {
        this._overrides.internalValue = value;
    }
    public resetOverrides() {
        this._overrides.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get overridesInput() {
        return this._overrides.internalValue;
    }
}
export interface AllowedStatisticsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#statistics CcJob#statistics}
    */
    readonly statistics?: string[];
}
export class AllowedStatisticsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AllowedStatisticsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._statistics !== undefined) {
            hasAnyValues = true;
            internalValueResult.statistics = this._statistics;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AllowedStatisticsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._statistics = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._statistics = value.statistics;
        }
    }

    // statistics - computed: true, optional: true, required: false
    private _statistics?: string[]; 
    public get statistics() {
        return this.getListAttribute('statistics');
    }
    public set statistics(value: string[]) {
        this._statistics = value;
    }
    public resetStatistics() {
        this._statistics = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statisticsInput() {
        return this._statistics;
    }
}
export interface EntityDetectorConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#allowed_statistics CcJob#allowed_statistics}
    */
    readonly allowedStatistics?: AllowedStatisticsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#entity_types CcJob#entity_types}
    */
    readonly entityTypes?: string[];
}
export class EntityDetectorConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EntityDetectorConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._allowedStatistics?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedStatistics = this._allowedStatistics?.internalValue;
        }
        if (this._entityTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.entityTypes = this._entityTypes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EntityDetectorConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allowedStatistics.internalValue = undefined;
            this._entityTypes = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allowedStatistics.internalValue = value.allowedStatistics;
            this._entityTypes = value.entityTypes;
        }
    }

    // allowed_statistics - computed: true, optional: true, required: false
    private _allowedStatistics = new AllowedStatisticsPropertyOutputReference(this, "allowed_statistics");
    public get allowedStatistics() {
        return this._allowedStatistics;
    }
    public putAllowedStatistics(value: AllowedStatisticsProperty) {
        this._allowedStatistics.internalValue = value;
    }
    public resetAllowedStatistics() {
        this._allowedStatistics.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedStatisticsInput() {
        return this._allowedStatistics.internalValue;
    }

    // entity_types - computed: true, optional: true, required: false
    private _entityTypes?: string[]; 
    public get entityTypes() {
        return this.getListAttribute('entity_types');
    }
    public set entityTypes(value: string[]) {
        this._entityTypes = value;
    }
    public resetEntityTypes() {
        this._entityTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get entityTypesInput() {
        return this._entityTypes;
    }
}
export interface ProfileColumnsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#name CcJob#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#regex CcJob#regex}
    */
    readonly regex?: string;
}
export class ProfileColumnsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): ProfileColumnsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._regex !== undefined) {
            hasAnyValues = true;
            internalValueResult.regex = this._regex;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ProfileColumnsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._regex = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._regex = value.regex;
        }
    }

    // name - computed: true, optional: true, required: false
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    public resetName() {
        this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
    }

    // regex - computed: true, optional: true, required: false
    private _regex?: string; 
    public get regex() {
        return this.getStringAttribute('regex');
    }
    public set regex(value: string) {
        this._regex = value;
    }
    public resetRegex() {
        this._regex = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get regexInput() {
        return this._regex;
    }
}

export class ProfileColumnsPropertyList extends cdktn.ComplexList {
    public internalValue? : ProfileColumnsProperty[] | cdktn.IResolvable

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
        super(terraformResource, terraformAttribute, wrapsSet);
    }

    /**
    * @param index the index of the item to return
    */
    public get(index: number): ProfileColumnsPropertyOutputReference {
        return new ProfileColumnsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ProfileConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#column_statistics_configurations CcJob#column_statistics_configurations}
    */
    readonly columnStatisticsConfigurations?: ColumnStatisticsConfigurationProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#dataset_statistics_configuration CcJob#dataset_statistics_configuration}
    */
    readonly datasetStatisticsConfiguration?: DatasetStatisticsConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#entity_detector_configuration CcJob#entity_detector_configuration}
    */
    readonly entityDetectorConfiguration?: EntityDetectorConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#profile_columns CcJob#profile_columns}
    */
    readonly profileColumns?: ProfileColumnsProperty[] | cdktn.IResolvable;
}
export class ProfileConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ProfileConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._columnStatisticsConfigurations?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.columnStatisticsConfigurations = this._columnStatisticsConfigurations?.internalValue;
        }
        if (this._datasetStatisticsConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.datasetStatisticsConfiguration = this._datasetStatisticsConfiguration?.internalValue;
        }
        if (this._entityDetectorConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.entityDetectorConfiguration = this._entityDetectorConfiguration?.internalValue;
        }
        if (this._profileColumns?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.profileColumns = this._profileColumns?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ProfileConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._columnStatisticsConfigurations.internalValue = undefined;
            this._datasetStatisticsConfiguration.internalValue = undefined;
            this._entityDetectorConfiguration.internalValue = undefined;
            this._profileColumns.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._columnStatisticsConfigurations.internalValue = value.columnStatisticsConfigurations;
            this._datasetStatisticsConfiguration.internalValue = value.datasetStatisticsConfiguration;
            this._entityDetectorConfiguration.internalValue = value.entityDetectorConfiguration;
            this._profileColumns.internalValue = value.profileColumns;
        }
    }

    // column_statistics_configurations - computed: true, optional: true, required: false
    private _columnStatisticsConfigurations = new ColumnStatisticsConfigurationPropertyList(this, "column_statistics_configurations", false);
    public get columnStatisticsConfigurations() {
        return this._columnStatisticsConfigurations;
    }
    public putColumnStatisticsConfigurations(value: ColumnStatisticsConfigurationProperty[] | cdktn.IResolvable) {
        this._columnStatisticsConfigurations.internalValue = value;
    }
    public resetColumnStatisticsConfigurations() {
        this._columnStatisticsConfigurations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get columnStatisticsConfigurationsInput() {
        return this._columnStatisticsConfigurations.internalValue;
    }

    // dataset_statistics_configuration - computed: true, optional: true, required: false
    private _datasetStatisticsConfiguration = new DatasetStatisticsConfigurationPropertyOutputReference(this, "dataset_statistics_configuration");
    public get datasetStatisticsConfiguration() {
        return this._datasetStatisticsConfiguration;
    }
    public putDatasetStatisticsConfiguration(value: DatasetStatisticsConfigurationProperty) {
        this._datasetStatisticsConfiguration.internalValue = value;
    }
    public resetDatasetStatisticsConfiguration() {
        this._datasetStatisticsConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get datasetStatisticsConfigurationInput() {
        return this._datasetStatisticsConfiguration.internalValue;
    }

    // entity_detector_configuration - computed: true, optional: true, required: false
    private _entityDetectorConfiguration = new EntityDetectorConfigurationPropertyOutputReference(this, "entity_detector_configuration");
    public get entityDetectorConfiguration() {
        return this._entityDetectorConfiguration;
    }
    public putEntityDetectorConfiguration(value: EntityDetectorConfigurationProperty) {
        this._entityDetectorConfiguration.internalValue = value;
    }
    public resetEntityDetectorConfiguration() {
        this._entityDetectorConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get entityDetectorConfigurationInput() {
        return this._entityDetectorConfiguration.internalValue;
    }

    // profile_columns - computed: true, optional: true, required: false
    private _profileColumns = new ProfileColumnsPropertyList(this, "profile_columns", false);
    public get profileColumns() {
        return this._profileColumns;
    }
    public putProfileColumns(value: ProfileColumnsProperty[] | cdktn.IResolvable) {
        this._profileColumns.internalValue = value;
    }
    public resetProfileColumns() {
        this._profileColumns.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get profileColumnsInput() {
        return this._profileColumns.internalValue;
    }
}
export interface RecipeProperty {
    /**
    * Recipe name
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#name CcJob#name}
    */
    readonly name?: string;
    /**
    * Recipe version
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#version CcJob#version}
    */
    readonly version?: string;
}
export class RecipePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RecipeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._version !== undefined) {
            hasAnyValues = true;
            internalValueResult.version = this._version;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RecipeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._version = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._version = value.version;
        }
    }

    // name - computed: true, optional: true, required: false
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    public resetName() {
        this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
    }

    // version - computed: true, optional: true, required: false
    private _version?: string; 
    public get version() {
        return this.getStringAttribute('version');
    }
    public set version(value: string) {
        this._version = value;
    }
    public resetVersion() {
        this._version = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get versionInput() {
        return this._version;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#key CcJob#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#value CcJob#value}
    */
    readonly value?: string;
}
export class TagPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): TagProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TagProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._key = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._key = value.key;
            this._value = value.value;
        }
    }

    // key - computed: true, optional: true, required: false
    private _key?: string; 
    public get key() {
        return this.getStringAttribute('key');
    }
    public set key(value: string) {
        this._key = value;
    }
    public resetKey() {
        this._key = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyInput() {
        return this._key;
    }

    // value - computed: true, optional: true, required: false
    private _value?: string; 
    public get value() {
        return this.getStringAttribute('value');
    }
    public set value(value: string) {
        this._value = value;
    }
    public resetValue() {
        this._value = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
        return this._value;
    }
}

export class TagPropertyList extends cdktn.ComplexList {
    public internalValue? : TagProperty[] | cdktn.IResolvable

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
        super(terraformResource, terraformAttribute, wrapsSet);
    }

    /**
    * @param index the index of the item to return
    */
    public get(index: number): TagPropertyOutputReference {
        return new TagPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ValidationConfigurationProperty {
    /**
    * Arn of the Ruleset
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#ruleset_arn CcJob#ruleset_arn}
    */
    readonly rulesetArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/databrew_job#validation_mode CcJob#validation_mode}
    */
    readonly validationMode?: string;
}
export class ValidationConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): ValidationConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._rulesetArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.rulesetArn = this._rulesetArn;
        }
        if (this._validationMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.validationMode = this._validationMode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ValidationConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._rulesetArn = undefined;
            this._validationMode = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._rulesetArn = value.rulesetArn;
            this._validationMode = value.validationMode;
        }
    }

    // ruleset_arn - computed: true, optional: true, required: false
    private _rulesetArn?: string; 
    public get rulesetArn() {
        return this.getStringAttribute('ruleset_arn');
    }
    public set rulesetArn(value: string) {
        this._rulesetArn = value;
    }
    public resetRulesetArn() {
        this._rulesetArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rulesetArnInput() {
        return this._rulesetArn;
    }

    // validation_mode - computed: true, optional: true, required: false
    private _validationMode?: string; 
    public get validationMode() {
        return this.getStringAttribute('validation_mode');
    }
    public set validationMode(value: string) {
        this._validationMode = value;
    }
    public resetValidationMode() {
        this._validationMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get validationModeInput() {
        return this._validationMode;
    }
}

export class ValidationConfigurationPropertyList extends cdktn.ComplexList {
    public internalValue? : ValidationConfigurationProperty[] | cdktn.IResolvable

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
        super(terraformResource, terraformAttribute, wrapsSet);
    }

    /**
    * @param index the index of the item to return
    */
    public get(index: number): ValidationConfigurationPropertyOutputReference {
        return new ValidationConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
