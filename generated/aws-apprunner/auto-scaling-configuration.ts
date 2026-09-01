// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_auto_scaling_configuration

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcAutoScalingConfigurationProps extends cdktn.TerraformMetaArguments {
    /**
    * The customer-provided auto scaling configuration name.  When you use it for the first time in an AWS Region, App Runner creates revision number 1 of this name. When you use the same name in subsequent calls, App Runner creates incremental revisions of the configuration. The auto scaling configuration name can be used in multiple revisions of a configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_auto_scaling_configuration#auto_scaling_configuration_name CcAutoScalingConfiguration#auto_scaling_configuration_name}
    */
    readonly autoScalingConfigurationName?: string;
    /**
    * The maximum number of concurrent requests that an instance processes. If the number of concurrent requests exceeds this limit, App Runner scales the service up to use more instances to process the requests.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_auto_scaling_configuration#max_concurrency CcAutoScalingConfiguration#max_concurrency}
    */
    readonly maxConcurrency?: number;
    /**
    * The maximum number of instances that an App Runner service scales up to. At most MaxSize instances actively serve traffic for your service.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_auto_scaling_configuration#max_size CcAutoScalingConfiguration#max_size}
    */
    readonly maxSize?: number;
    /**
    * The minimum number of instances that App Runner provisions for a service. The service always has at least MinSize provisioned instances. Some of them actively serve traffic. The rest of them (provisioned and inactive instances) are a cost-effective compute capacity reserve and are ready to be quickly activated. You pay for memory usage of all the provisioned instances. You pay for CPU usage of only the active subset.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_auto_scaling_configuration#min_size CcAutoScalingConfiguration#min_size}
    */
    readonly minSize?: number;
    /**
    * A list of metadata items that you can associate with your auto scaling configuration resource. A tag is a key-value pair.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_auto_scaling_configuration#tags CcAutoScalingConfiguration#tags}
    */
    readonly tags?: CcAutoScalingConfiguration.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_auto_scaling_configuration awscc_apprunner_auto_scaling_configuration}
*/
export class CcAutoScalingConfiguration extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_apprunner_auto_scaling_configuration";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcAutoScalingConfiguration resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcAutoScalingConfiguration to import
    * @param importFromId The id of the existing CcAutoScalingConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_auto_scaling_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcAutoScalingConfiguration to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_apprunner_auto_scaling_configuration", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_auto_scaling_configuration awscc_apprunner_auto_scaling_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcAutoScalingConfigurationProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcAutoScalingConfigurationProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_apprunner_auto_scaling_configuration',
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
        this._autoScalingConfigurationName = config.autoScalingConfigurationName;
        this._maxConcurrency = config.maxConcurrency;
        this._maxSize = config.maxSize;
        this._minSize = config.minSize;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // auto_scaling_configuration_arn - computed: true, optional: false, required: false
    public get autoScalingConfigurationArn() {
        return this.getStringAttribute('auto_scaling_configuration_arn');
    }

    // auto_scaling_configuration_name - computed: true, optional: true, required: false
    private _autoScalingConfigurationName?: string; 
    public get autoScalingConfigurationName() {
        return this.getStringAttribute('auto_scaling_configuration_name');
    }
    public set autoScalingConfigurationName(value: string) {
        this._autoScalingConfigurationName = value;
    }
    public resetAutoScalingConfigurationName() {
        this._autoScalingConfigurationName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoScalingConfigurationNameInput() {
        return this._autoScalingConfigurationName;
    }

    // auto_scaling_configuration_revision - computed: true, optional: false, required: false
    public get autoScalingConfigurationRevision() {
        return this.getNumberAttribute('auto_scaling_configuration_revision');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // latest - computed: true, optional: false, required: false
    public get latest() {
        return this.getBooleanAttribute('latest');
    }

    // max_concurrency - computed: true, optional: true, required: false
    private _maxConcurrency?: number; 
    public get maxConcurrency() {
        return this.getNumberAttribute('max_concurrency');
    }
    public set maxConcurrency(value: number) {
        this._maxConcurrency = value;
    }
    public resetMaxConcurrency() {
        this._maxConcurrency = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxConcurrencyInput() {
        return this._maxConcurrency;
    }

    // max_size - computed: true, optional: true, required: false
    private _maxSize?: number; 
    public get maxSize() {
        return this.getNumberAttribute('max_size');
    }
    public set maxSize(value: number) {
        this._maxSize = value;
    }
    public resetMaxSize() {
        this._maxSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxSizeInput() {
        return this._maxSize;
    }

    // min_size - computed: true, optional: true, required: false
    private _minSize?: number; 
    public get minSize() {
        return this.getNumberAttribute('min_size');
    }
    public set minSize(value: number) {
        this._minSize = value;
    }
    public resetMinSize() {
        this._minSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minSizeInput() {
        return this._minSize;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcAutoScalingConfiguration.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcAutoScalingConfiguration.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            auto_scaling_configuration_name: cdktn.stringToTerraform(this._autoScalingConfigurationName),
            max_concurrency: cdktn.numberToTerraform(this._maxConcurrency),
            max_size: cdktn.numberToTerraform(this._maxSize),
            min_size: cdktn.numberToTerraform(this._minSize),
            tags: cdktn.listMapper(ccAutoScalingConfigurationTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            auto_scaling_configuration_name: {
                value: cdktn.stringToHclTerraform(this._autoScalingConfigurationName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            max_concurrency: {
                value: cdktn.numberToHclTerraform(this._maxConcurrency),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            max_size: {
                value: cdktn.numberToHclTerraform(this._maxSize),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            min_size: {
                value: cdktn.numberToHclTerraform(this._minSize),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            tags: {
                value: cdktn.listMapperHcl(ccAutoScalingConfigurationTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcAutoScalingConfiguration.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccAutoScalingConfigurationTagPropertyToTerraform(struct?: CcAutoScalingConfiguration.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccAutoScalingConfigurationTagPropertyToHclTerraform(struct?: CcAutoScalingConfiguration.TagProperty | cdktn.IResolvable): any {
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


export namespace CcAutoScalingConfiguration {
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_auto_scaling_configuration#key CcAutoScalingConfiguration#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_auto_scaling_configuration#value CcAutoScalingConfiguration#value}
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
}
