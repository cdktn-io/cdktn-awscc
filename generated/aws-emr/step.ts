// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_step

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcStepProps extends cdktn.TerraformMetaArguments {
    /**
    * This specifies what action to take when the cluster step fails. Possible values are CANCEL_AND_WAIT and CONTINUE.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_step#action_on_failure CcStep#action_on_failure}
    */
    readonly actionOnFailure: string;
    /**
    * The KMS key ARN to encrypt the logs published to the given Amazon S3 destination. When omitted, EMR falls back to cluster-level logging behavior.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_step#encryption_key_arn CcStep#encryption_key_arn}
    */
    readonly encryptionKeyArn?: string;
    /**
    * The HadoopJarStepConfig property type specifies a job flow step consisting of a JAR file whose main function will be executed. The main function submits a job for the cluster to execute as a step on the master node, and then waits for the job to finish or fail before executing subsequent steps.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_step#hadoop_jar_step CcStep#hadoop_jar_step}
    */
    readonly hadoopJarStep: CcStep.HadoopJarStepConfigProperty;
    /**
    * A string that uniquely identifies the cluster (job flow).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_step#job_flow_id CcStep#job_flow_id}
    */
    readonly jobFlowId: string;
    /**
    * The Amazon S3 destination URI for log publishing. When omitted, EMR falls back to cluster-level logging behavior.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_step#log_uri CcStep#log_uri}
    */
    readonly logUri?: string;
    /**
    * The name of the cluster step.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_step#name CcStep#name}
    */
    readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_step awscc_emr_step}
*/
export class CcStep extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_emr_step";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcStep resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcStep to import
    * @param importFromId The id of the existing CcStep that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_step#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcStep to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_emr_step", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_step awscc_emr_step} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcStepProps
    */
    public constructor(scope: Construct, id: string, config: CcStepProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_emr_step',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.99.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._actionOnFailure = config.actionOnFailure;
        this._encryptionKeyArn = config.encryptionKeyArn;
        this._hadoopJarStep.internalValue = config.hadoopJarStep;
        this._jobFlowId = config.jobFlowId;
        this._logUri = config.logUri;
        this._name = config.name;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // action_on_failure - computed: false, optional: false, required: true
    private _actionOnFailure?: string; 
    public get actionOnFailure() {
        return this.getStringAttribute('action_on_failure');
    }
    public set actionOnFailure(value: string) {
        this._actionOnFailure = value;
    }
    // Temporarily expose input value. Use with caution.
    public get actionOnFailureInput() {
        return this._actionOnFailure;
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

    // hadoop_jar_step - computed: false, optional: false, required: true
    private _hadoopJarStep = new CcStep.HadoopJarStepConfigPropertyOutputReference(this, "hadoop_jar_step");
    public get hadoopJarStep() {
        return this._hadoopJarStep;
    }
    public putHadoopJarStep(value: CcStep.HadoopJarStepConfigProperty) {
        this._hadoopJarStep.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get hadoopJarStepInput() {
        return this._hadoopJarStep.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // job_flow_id - computed: false, optional: false, required: true
    private _jobFlowId?: string; 
    public get jobFlowId() {
        return this.getStringAttribute('job_flow_id');
    }
    public set jobFlowId(value: string) {
        this._jobFlowId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get jobFlowIdInput() {
        return this._jobFlowId;
    }

    // log_uri - computed: true, optional: true, required: false
    private _logUri?: string; 
    public get logUri() {
        return this.getStringAttribute('log_uri');
    }
    public set logUri(value: string) {
        this._logUri = value;
    }
    public resetLogUri() {
        this._logUri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logUriInput() {
        return this._logUri;
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

    // step_id - computed: true, optional: false, required: false
    public get stepId() {
        return this.getStringAttribute('step_id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            action_on_failure: cdktn.stringToTerraform(this._actionOnFailure),
            encryption_key_arn: cdktn.stringToTerraform(this._encryptionKeyArn),
            hadoop_jar_step: ccStepHadoopJarStepConfigPropertyToTerraform(this._hadoopJarStep.internalValue),
            job_flow_id: cdktn.stringToTerraform(this._jobFlowId),
            log_uri: cdktn.stringToTerraform(this._logUri),
            name: cdktn.stringToTerraform(this._name),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            action_on_failure: {
                value: cdktn.stringToHclTerraform(this._actionOnFailure),
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
            hadoop_jar_step: {
                value: ccStepHadoopJarStepConfigPropertyToHclTerraform(this._hadoopJarStep.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcStep.HadoopJarStepConfigProperty",
            },
            job_flow_id: {
                value: cdktn.stringToHclTerraform(this._jobFlowId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            log_uri: {
                value: cdktn.stringToHclTerraform(this._logUri),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccStepKeyValuePropertyToTerraform(struct?: CcStep.KeyValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccStepKeyValuePropertyToHclTerraform(struct?: CcStep.KeyValueProperty | cdktn.IResolvable): any {
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


export function ccStepHadoopJarStepConfigPropertyToTerraform(struct?: CcStep.HadoopJarStepConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        args: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.args),
        jar: cdktn.stringToTerraform(struct!.jar),
        main_class: cdktn.stringToTerraform(struct!.mainClass),
        step_properties: cdktn.listMapper(ccStepKeyValuePropertyToTerraform, false)(struct!.stepProperties),
    }
}


export function ccStepHadoopJarStepConfigPropertyToHclTerraform(struct?: CcStep.HadoopJarStepConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        args: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.args),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        jar: {
            value: cdktn.stringToHclTerraform(struct!.jar),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        main_class: {
            value: cdktn.stringToHclTerraform(struct!.mainClass),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        step_properties: {
            value: cdktn.listMapperHcl(ccStepKeyValuePropertyToHclTerraform, false)(struct!.stepProperties),
            isBlock: true,
            type: "list",
            storageClassType: "KeyValuePropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcStep {
export interface KeyValueProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_step#key CcStep#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_step#value CcStep#value}
    */
    readonly value?: string;
}
export class KeyValuePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): KeyValueProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: KeyValueProperty | cdktn.IResolvable | undefined) {
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

export class KeyValuePropertyList extends cdktn.ComplexList {
    public internalValue? : KeyValueProperty[] | cdktn.IResolvable

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
    public get(index: number): KeyValuePropertyOutputReference {
        return new KeyValuePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface HadoopJarStepConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_step#args CcStep#args}
    */
    readonly args?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_step#jar CcStep#jar}
    */
    readonly jar: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_step#main_class CcStep#main_class}
    */
    readonly mainClass?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_step#step_properties CcStep#step_properties}
    */
    readonly stepProperties?: KeyValueProperty[] | cdktn.IResolvable;
}
export class HadoopJarStepConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HadoopJarStepConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._args !== undefined) {
            hasAnyValues = true;
            internalValueResult.args = this._args;
        }
        if (this._jar !== undefined) {
            hasAnyValues = true;
            internalValueResult.jar = this._jar;
        }
        if (this._mainClass !== undefined) {
            hasAnyValues = true;
            internalValueResult.mainClass = this._mainClass;
        }
        if (this._stepProperties?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.stepProperties = this._stepProperties?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HadoopJarStepConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._args = undefined;
            this._jar = undefined;
            this._mainClass = undefined;
            this._stepProperties.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._args = value.args;
            this._jar = value.jar;
            this._mainClass = value.mainClass;
            this._stepProperties.internalValue = value.stepProperties;
        }
    }

    // args - computed: true, optional: true, required: false
    private _args?: string[]; 
    public get args() {
        return this.getListAttribute('args');
    }
    public set args(value: string[]) {
        this._args = value;
    }
    public resetArgs() {
        this._args = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get argsInput() {
        return this._args;
    }

    // jar - computed: false, optional: false, required: true
    private _jar?: string; 
    public get jar() {
        return this.getStringAttribute('jar');
    }
    public set jar(value: string) {
        this._jar = value;
    }
    // Temporarily expose input value. Use with caution.
    public get jarInput() {
        return this._jar;
    }

    // main_class - computed: true, optional: true, required: false
    private _mainClass?: string; 
    public get mainClass() {
        return this.getStringAttribute('main_class');
    }
    public set mainClass(value: string) {
        this._mainClass = value;
    }
    public resetMainClass() {
        this._mainClass = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mainClassInput() {
        return this._mainClass;
    }

    // step_properties - computed: true, optional: true, required: false
    private _stepProperties = new KeyValuePropertyList(this, "step_properties", false);
    public get stepProperties() {
        return this._stepProperties;
    }
    public putStepProperties(value: KeyValueProperty[] | cdktn.IResolvable) {
        this._stepProperties.internalValue = value;
    }
    public resetStepProperties() {
        this._stepProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stepPropertiesInput() {
        return this._stepProperties.internalValue;
    }
}
}
