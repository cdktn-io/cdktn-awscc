// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/config_delivery_channel

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcDeliveryChannelProps extends cdktn.TerraformMetaArguments {
    /**
    * The options for how often AWS Config delivers configuration snapshots to the Amazon S3 bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/config_delivery_channel#config_snapshot_delivery_properties CcDeliveryChannel#config_snapshot_delivery_properties}
    */
    readonly configSnapshotDeliveryProperties?: CcDeliveryChannel.ConfigSnapshotDeliveryPropertiesProperty;
    /**
    * The name of the delivery channel. By default, AWS Config assigns the name "default" when creating the delivery channel. To change the delivery channel name, you must use the DeleteDeliveryChannel action to delete your current delivery channel, and then you must use the PutDeliveryChannel command to create a delivery channel that has the desired name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/config_delivery_channel#name CcDeliveryChannel#name}
    */
    readonly name?: string;
    /**
    * The name of the Amazon S3 bucket to which AWS Config delivers configuration snapshots and configuration history files.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/config_delivery_channel#s3_bucket_name CcDeliveryChannel#s3_bucket_name}
    */
    readonly s3BucketName: string;
    /**
    * The prefix for the specified Amazon S3 bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/config_delivery_channel#s3_key_prefix CcDeliveryChannel#s3_key_prefix}
    */
    readonly s3KeyPrefix?: string;
    /**
    * The Amazon Resource Name (ARN) of the AWS Key Management Service (AWS KMS ) AWS KMS key (KMS key) used to encrypt objects delivered by AWS Config. Must belong to the same Region as the destination S3 bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/config_delivery_channel#s3_kms_key_arn CcDeliveryChannel#s3_kms_key_arn}
    */
    readonly s3KmsKeyArn?: string;
    /**
    * The Amazon Resource Name (ARN) of the Amazon SNS topic to which AWS Config sends notifications about configuration changes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/config_delivery_channel#sns_topic_arn CcDeliveryChannel#sns_topic_arn}
    */
    readonly snsTopicArn?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/config_delivery_channel awscc_config_delivery_channel}
*/
export class CcDeliveryChannel extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_config_delivery_channel";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcDeliveryChannel resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcDeliveryChannel to import
    * @param importFromId The id of the existing CcDeliveryChannel that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/config_delivery_channel#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcDeliveryChannel to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_config_delivery_channel", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/config_delivery_channel awscc_config_delivery_channel} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcDeliveryChannelProps
    */
    public constructor(scope: Construct, id: string, config: CcDeliveryChannelProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_config_delivery_channel',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.102.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._configSnapshotDeliveryProperties.internalValue = config.configSnapshotDeliveryProperties;
        this._name = config.name;
        this._s3BucketName = config.s3BucketName;
        this._s3KeyPrefix = config.s3KeyPrefix;
        this._s3KmsKeyArn = config.s3KmsKeyArn;
        this._snsTopicArn = config.snsTopicArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // config_snapshot_delivery_properties - computed: true, optional: true, required: false
    private _configSnapshotDeliveryProperties = new CcDeliveryChannel.ConfigSnapshotDeliveryPropertiesPropertyOutputReference(this, "config_snapshot_delivery_properties");
    public get configSnapshotDeliveryProperties() {
        return this._configSnapshotDeliveryProperties;
    }
    public putConfigSnapshotDeliveryProperties(value: CcDeliveryChannel.ConfigSnapshotDeliveryPropertiesProperty) {
        this._configSnapshotDeliveryProperties.internalValue = value;
    }
    public resetConfigSnapshotDeliveryProperties() {
        this._configSnapshotDeliveryProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get configSnapshotDeliveryPropertiesInput() {
        return this._configSnapshotDeliveryProperties.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
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

    // s3_bucket_name - computed: false, optional: false, required: true
    private _s3BucketName?: string; 
    public get s3BucketName() {
        return this.getStringAttribute('s3_bucket_name');
    }
    public set s3BucketName(value: string) {
        this._s3BucketName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get s3BucketNameInput() {
        return this._s3BucketName;
    }

    // s3_key_prefix - computed: true, optional: true, required: false
    private _s3KeyPrefix?: string; 
    public get s3KeyPrefix() {
        return this.getStringAttribute('s3_key_prefix');
    }
    public set s3KeyPrefix(value: string) {
        this._s3KeyPrefix = value;
    }
    public resetS3KeyPrefix() {
        this._s3KeyPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3KeyPrefixInput() {
        return this._s3KeyPrefix;
    }

    // s3_kms_key_arn - computed: true, optional: true, required: false
    private _s3KmsKeyArn?: string; 
    public get s3KmsKeyArn() {
        return this.getStringAttribute('s3_kms_key_arn');
    }
    public set s3KmsKeyArn(value: string) {
        this._s3KmsKeyArn = value;
    }
    public resetS3KmsKeyArn() {
        this._s3KmsKeyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3KmsKeyArnInput() {
        return this._s3KmsKeyArn;
    }

    // sns_topic_arn - computed: true, optional: true, required: false
    private _snsTopicArn?: string; 
    public get snsTopicArn() {
        return this.getStringAttribute('sns_topic_arn');
    }
    public set snsTopicArn(value: string) {
        this._snsTopicArn = value;
    }
    public resetSnsTopicArn() {
        this._snsTopicArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get snsTopicArnInput() {
        return this._snsTopicArn;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            config_snapshot_delivery_properties: ccDeliveryChannelConfigSnapshotDeliveryPropertiesPropertyToTerraform(this._configSnapshotDeliveryProperties.internalValue),
            name: cdktn.stringToTerraform(this._name),
            s3_bucket_name: cdktn.stringToTerraform(this._s3BucketName),
            s3_key_prefix: cdktn.stringToTerraform(this._s3KeyPrefix),
            s3_kms_key_arn: cdktn.stringToTerraform(this._s3KmsKeyArn),
            sns_topic_arn: cdktn.stringToTerraform(this._snsTopicArn),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            config_snapshot_delivery_properties: {
                value: ccDeliveryChannelConfigSnapshotDeliveryPropertiesPropertyToHclTerraform(this._configSnapshotDeliveryProperties.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDeliveryChannel.ConfigSnapshotDeliveryPropertiesProperty",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            s3_bucket_name: {
                value: cdktn.stringToHclTerraform(this._s3BucketName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            s3_key_prefix: {
                value: cdktn.stringToHclTerraform(this._s3KeyPrefix),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            s3_kms_key_arn: {
                value: cdktn.stringToHclTerraform(this._s3KmsKeyArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            sns_topic_arn: {
                value: cdktn.stringToHclTerraform(this._snsTopicArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccDeliveryChannelConfigSnapshotDeliveryPropertiesPropertyToTerraform(struct?: CcDeliveryChannel.ConfigSnapshotDeliveryPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        delivery_frequency: cdktn.stringToTerraform(struct!.deliveryFrequency),
    }
}


export function ccDeliveryChannelConfigSnapshotDeliveryPropertiesPropertyToHclTerraform(struct?: CcDeliveryChannel.ConfigSnapshotDeliveryPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        delivery_frequency: {
            value: cdktn.stringToHclTerraform(struct!.deliveryFrequency),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcDeliveryChannel {
export interface ConfigSnapshotDeliveryPropertiesProperty {
    /**
    * The frequency with which AWS Config delivers configuration snapshots.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/config_delivery_channel#delivery_frequency CcDeliveryChannel#delivery_frequency}
    */
    readonly deliveryFrequency?: string;
}
export class ConfigSnapshotDeliveryPropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConfigSnapshotDeliveryPropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._deliveryFrequency !== undefined) {
            hasAnyValues = true;
            internalValueResult.deliveryFrequency = this._deliveryFrequency;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConfigSnapshotDeliveryPropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._deliveryFrequency = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._deliveryFrequency = value.deliveryFrequency;
        }
    }

    // delivery_frequency - computed: true, optional: true, required: false
    private _deliveryFrequency?: string; 
    public get deliveryFrequency() {
        return this.getStringAttribute('delivery_frequency');
    }
    public set deliveryFrequency(value: string) {
        this._deliveryFrequency = value;
    }
    public resetDeliveryFrequency() {
        this._deliveryFrequency = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deliveryFrequencyInput() {
        return this._deliveryFrequency;
    }
}
}
