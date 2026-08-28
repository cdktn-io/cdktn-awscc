// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_flow_entitlement

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcFlowEntitlementProps extends cdktn.TerraformMetaArguments {
    /**
    * Percentage from 0-100 of the data transfer cost to be billed to the subscriber.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_flow_entitlement#data_transfer_subscriber_fee_percent CcFlowEntitlement#data_transfer_subscriber_fee_percent}
    */
    readonly dataTransferSubscriberFeePercent?: number;
    /**
    * A description of the entitlement.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_flow_entitlement#description CcFlowEntitlement#description}
    */
    readonly description: string;
    /**
    * The type of encryption that will be used on the output that is associated with this entitlement.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_flow_entitlement#encryption CcFlowEntitlement#encryption}
    */
    readonly encryption?: CcFlowEntitlement.EncryptionProperty;
    /**
    *  An indication of whether the entitlement is enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_flow_entitlement#entitlement_status CcFlowEntitlement#entitlement_status}
    */
    readonly entitlementStatus?: string;
    /**
    * The ARN of the flow.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_flow_entitlement#flow_arn CcFlowEntitlement#flow_arn}
    */
    readonly flowArn: string;
    /**
    * The name of the entitlement.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_flow_entitlement#name CcFlowEntitlement#name}
    */
    readonly name: string;
    /**
    * The AWS account IDs that you want to share your content with. The receiving accounts (subscribers) will be allowed to create their own flow using your content as the source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_flow_entitlement#subscribers CcFlowEntitlement#subscribers}
    */
    readonly subscribers: string[];
    /**
    * Key-value pairs that can be used to tag and organize this flow entitlement.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_flow_entitlement#tags CcFlowEntitlement#tags}
    */
    readonly tags?: CcFlowEntitlement.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_flow_entitlement awscc_mediaconnect_flow_entitlement}
*/
export class CcFlowEntitlement extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_mediaconnect_flow_entitlement";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcFlowEntitlement resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcFlowEntitlement to import
    * @param importFromId The id of the existing CcFlowEntitlement that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_flow_entitlement#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcFlowEntitlement to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_mediaconnect_flow_entitlement", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_flow_entitlement awscc_mediaconnect_flow_entitlement} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcFlowEntitlementProps
    */
    public constructor(scope: Construct, id: string, config: CcFlowEntitlementProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_mediaconnect_flow_entitlement',
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
        this._dataTransferSubscriberFeePercent = config.dataTransferSubscriberFeePercent;
        this._description = config.description;
        this._encryption.internalValue = config.encryption;
        this._entitlementStatus = config.entitlementStatus;
        this._flowArn = config.flowArn;
        this._name = config.name;
        this._subscribers = config.subscribers;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // data_transfer_subscriber_fee_percent - computed: true, optional: true, required: false
    private _dataTransferSubscriberFeePercent?: number; 
    public get dataTransferSubscriberFeePercent() {
        return this.getNumberAttribute('data_transfer_subscriber_fee_percent');
    }
    public set dataTransferSubscriberFeePercent(value: number) {
        this._dataTransferSubscriberFeePercent = value;
    }
    public resetDataTransferSubscriberFeePercent() {
        this._dataTransferSubscriberFeePercent = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataTransferSubscriberFeePercentInput() {
        return this._dataTransferSubscriberFeePercent;
    }

    // description - computed: false, optional: false, required: true
    private _description?: string; 
    public get description() {
        return this.getStringAttribute('description');
    }
    public set description(value: string) {
        this._description = value;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
        return this._description;
    }

    // encryption - computed: true, optional: true, required: false
    private _encryption = new CcFlowEntitlement.EncryptionPropertyOutputReference(this, "encryption");
    public get encryption() {
        return this._encryption;
    }
    public putEncryption(value: CcFlowEntitlement.EncryptionProperty) {
        this._encryption.internalValue = value;
    }
    public resetEncryption() {
        this._encryption.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionInput() {
        return this._encryption.internalValue;
    }

    // entitlement_arn - computed: true, optional: false, required: false
    public get entitlementArn() {
        return this.getStringAttribute('entitlement_arn');
    }

    // entitlement_status - computed: true, optional: true, required: false
    private _entitlementStatus?: string; 
    public get entitlementStatus() {
        return this.getStringAttribute('entitlement_status');
    }
    public set entitlementStatus(value: string) {
        this._entitlementStatus = value;
    }
    public resetEntitlementStatus() {
        this._entitlementStatus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get entitlementStatusInput() {
        return this._entitlementStatus;
    }

    // flow_arn - computed: false, optional: false, required: true
    private _flowArn?: string; 
    public get flowArn() {
        return this.getStringAttribute('flow_arn');
    }
    public set flowArn(value: string) {
        this._flowArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get flowArnInput() {
        return this._flowArn;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
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

    // subscribers - computed: false, optional: false, required: true
    private _subscribers?: string[]; 
    public get subscribers() {
        return this.getListAttribute('subscribers');
    }
    public set subscribers(value: string[]) {
        this._subscribers = value;
    }
    // Temporarily expose input value. Use with caution.
    public get subscribersInput() {
        return this._subscribers;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcFlowEntitlement.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcFlowEntitlement.TagProperty[] | cdktn.IResolvable) {
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
            data_transfer_subscriber_fee_percent: cdktn.numberToTerraform(this._dataTransferSubscriberFeePercent),
            description: cdktn.stringToTerraform(this._description),
            encryption: ccFlowEntitlementEncryptionPropertyToTerraform(this._encryption.internalValue),
            entitlement_status: cdktn.stringToTerraform(this._entitlementStatus),
            flow_arn: cdktn.stringToTerraform(this._flowArn),
            name: cdktn.stringToTerraform(this._name),
            subscribers: cdktn.listMapper(cdktn.stringToTerraform, false)(this._subscribers),
            tags: cdktn.listMapper(ccFlowEntitlementTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            data_transfer_subscriber_fee_percent: {
                value: cdktn.numberToHclTerraform(this._dataTransferSubscriberFeePercent),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            encryption: {
                value: ccFlowEntitlementEncryptionPropertyToHclTerraform(this._encryption.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcFlowEntitlement.EncryptionProperty",
            },
            entitlement_status: {
                value: cdktn.stringToHclTerraform(this._entitlementStatus),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            flow_arn: {
                value: cdktn.stringToHclTerraform(this._flowArn),
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
            subscribers: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._subscribers),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            tags: {
                value: cdktn.listMapperHcl(ccFlowEntitlementTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcFlowEntitlement.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccFlowEntitlementEncryptionPropertyToTerraform(struct?: CcFlowEntitlement.EncryptionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        algorithm: cdktn.stringToTerraform(struct!.algorithm),
        constant_initialization_vector: cdktn.stringToTerraform(struct!.constantInitializationVector),
        device_id: cdktn.stringToTerraform(struct!.deviceId),
        key_type: cdktn.stringToTerraform(struct!.keyType),
        region: cdktn.stringToTerraform(struct!.region),
        resource_id: cdktn.stringToTerraform(struct!.resourceId),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
        secret_arn: cdktn.stringToTerraform(struct!.secretArn),
        url: cdktn.stringToTerraform(struct!.url),
    }
}


export function ccFlowEntitlementEncryptionPropertyToHclTerraform(struct?: CcFlowEntitlement.EncryptionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        algorithm: {
            value: cdktn.stringToHclTerraform(struct!.algorithm),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        constant_initialization_vector: {
            value: cdktn.stringToHclTerraform(struct!.constantInitializationVector),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        device_id: {
            value: cdktn.stringToHclTerraform(struct!.deviceId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key_type: {
            value: cdktn.stringToHclTerraform(struct!.keyType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        region: {
            value: cdktn.stringToHclTerraform(struct!.region),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        resource_id: {
            value: cdktn.stringToHclTerraform(struct!.resourceId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secret_arn: {
            value: cdktn.stringToHclTerraform(struct!.secretArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        url: {
            value: cdktn.stringToHclTerraform(struct!.url),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFlowEntitlementTagPropertyToTerraform(struct?: CcFlowEntitlement.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccFlowEntitlementTagPropertyToHclTerraform(struct?: CcFlowEntitlement.TagProperty | cdktn.IResolvable): any {
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


export namespace CcFlowEntitlement {
export interface EncryptionProperty {
    /**
    * The type of algorithm that is used for the encryption (such as aes128, aes192, or aes256).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_flow_entitlement#algorithm CcFlowEntitlement#algorithm}
    */
    readonly algorithm?: string;
    /**
    * A 128-bit, 16-byte hex value represented by a 32-character string, to be used with the key for encrypting content. This parameter is not valid for static key encryption.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_flow_entitlement#constant_initialization_vector CcFlowEntitlement#constant_initialization_vector}
    */
    readonly constantInitializationVector?: string;
    /**
    * The value of one of the devices that you configured with your digital rights management (DRM) platform key provider. This parameter is required for SPEKE encryption and is not valid for static key encryption.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_flow_entitlement#device_id CcFlowEntitlement#device_id}
    */
    readonly deviceId?: string;
    /**
    * The type of key that is used for the encryption. If no keyType is provided, the service will use the default setting (static-key).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_flow_entitlement#key_type CcFlowEntitlement#key_type}
    */
    readonly keyType?: string;
    /**
    * The AWS Region that the API Gateway proxy endpoint was created in. This parameter is required for SPEKE encryption and is not valid for static key encryption.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_flow_entitlement#region CcFlowEntitlement#region}
    */
    readonly region?: string;
    /**
    * An identifier for the content. The service sends this value to the key server to identify the current endpoint. The resource ID is also known as the content ID. This parameter is required for SPEKE encryption and is not valid for static key encryption.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_flow_entitlement#resource_id CcFlowEntitlement#resource_id}
    */
    readonly resourceId?: string;
    /**
    * The ARN of the role that you created during setup (when you set up AWS Elemental MediaConnect as a trusted entity).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_flow_entitlement#role_arn CcFlowEntitlement#role_arn}
    */
    readonly roleArn?: string;
    /**
    *  The ARN of the secret that you created in AWS Secrets Manager to store the encryption key. This parameter is required for static key encryption and is not valid for SPEKE encryption.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_flow_entitlement#secret_arn CcFlowEntitlement#secret_arn}
    */
    readonly secretArn?: string;
    /**
    * The URL from the API Gateway proxy that you set up to talk to your key server. This parameter is required for SPEKE encryption and is not valid for static key encryption.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_flow_entitlement#url CcFlowEntitlement#url}
    */
    readonly url?: string;
}
export class EncryptionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EncryptionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._algorithm !== undefined) {
            hasAnyValues = true;
            internalValueResult.algorithm = this._algorithm;
        }
        if (this._constantInitializationVector !== undefined) {
            hasAnyValues = true;
            internalValueResult.constantInitializationVector = this._constantInitializationVector;
        }
        if (this._deviceId !== undefined) {
            hasAnyValues = true;
            internalValueResult.deviceId = this._deviceId;
        }
        if (this._keyType !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyType = this._keyType;
        }
        if (this._region !== undefined) {
            hasAnyValues = true;
            internalValueResult.region = this._region;
        }
        if (this._resourceId !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceId = this._resourceId;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._secretArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretArn = this._secretArn;
        }
        if (this._url !== undefined) {
            hasAnyValues = true;
            internalValueResult.url = this._url;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EncryptionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._algorithm = undefined;
            this._constantInitializationVector = undefined;
            this._deviceId = undefined;
            this._keyType = undefined;
            this._region = undefined;
            this._resourceId = undefined;
            this._roleArn = undefined;
            this._secretArn = undefined;
            this._url = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._algorithm = value.algorithm;
            this._constantInitializationVector = value.constantInitializationVector;
            this._deviceId = value.deviceId;
            this._keyType = value.keyType;
            this._region = value.region;
            this._resourceId = value.resourceId;
            this._roleArn = value.roleArn;
            this._secretArn = value.secretArn;
            this._url = value.url;
        }
    }

    // algorithm - computed: true, optional: true, required: false
    private _algorithm?: string; 
    public get algorithm() {
        return this.getStringAttribute('algorithm');
    }
    public set algorithm(value: string) {
        this._algorithm = value;
    }
    public resetAlgorithm() {
        this._algorithm = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get algorithmInput() {
        return this._algorithm;
    }

    // constant_initialization_vector - computed: true, optional: true, required: false
    private _constantInitializationVector?: string; 
    public get constantInitializationVector() {
        return this.getStringAttribute('constant_initialization_vector');
    }
    public set constantInitializationVector(value: string) {
        this._constantInitializationVector = value;
    }
    public resetConstantInitializationVector() {
        this._constantInitializationVector = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get constantInitializationVectorInput() {
        return this._constantInitializationVector;
    }

    // device_id - computed: true, optional: true, required: false
    private _deviceId?: string; 
    public get deviceId() {
        return this.getStringAttribute('device_id');
    }
    public set deviceId(value: string) {
        this._deviceId = value;
    }
    public resetDeviceId() {
        this._deviceId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deviceIdInput() {
        return this._deviceId;
    }

    // key_type - computed: true, optional: true, required: false
    private _keyType?: string; 
    public get keyType() {
        return this.getStringAttribute('key_type');
    }
    public set keyType(value: string) {
        this._keyType = value;
    }
    public resetKeyType() {
        this._keyType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyTypeInput() {
        return this._keyType;
    }

    // region - computed: true, optional: true, required: false
    private _region?: string; 
    public get region() {
        return this.getStringAttribute('region');
    }
    public set region(value: string) {
        this._region = value;
    }
    public resetRegion() {
        this._region = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get regionInput() {
        return this._region;
    }

    // resource_id - computed: true, optional: true, required: false
    private _resourceId?: string; 
    public get resourceId() {
        return this.getStringAttribute('resource_id');
    }
    public set resourceId(value: string) {
        this._resourceId = value;
    }
    public resetResourceId() {
        this._resourceId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceIdInput() {
        return this._resourceId;
    }

    // role_arn - computed: true, optional: true, required: false
    private _roleArn?: string; 
    public get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
        this._roleArn = value;
    }
    public resetRoleArn() {
        this._roleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
        return this._roleArn;
    }

    // secret_arn - computed: true, optional: true, required: false
    private _secretArn?: string; 
    public get secretArn() {
        return this.getStringAttribute('secret_arn');
    }
    public set secretArn(value: string) {
        this._secretArn = value;
    }
    public resetSecretArn() {
        this._secretArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretArnInput() {
        return this._secretArn;
    }

    // url - computed: true, optional: true, required: false
    private _url?: string; 
    public get url() {
        return this.getStringAttribute('url');
    }
    public set url(value: string) {
        this._url = value;
    }
    public resetUrl() {
        this._url = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get urlInput() {
        return this._url;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_flow_entitlement#key CcFlowEntitlement#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediaconnect_flow_entitlement#value CcFlowEntitlement#value}
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
