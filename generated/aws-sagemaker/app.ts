// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_app

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcAppProps extends cdktn.TerraformMetaArguments {
    /**
    * The name of the app.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_app#app_name CcApp#app_name}
    */
    readonly appName: string;
    /**
    * The type of app.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_app#app_type CcApp#app_type}
    */
    readonly appType: string;
    /**
    * The domain ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_app#domain_id CcApp#domain_id}
    */
    readonly domainId: string;
    /**
    * Indicates whether the application is launched in recovery mode.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_app#recovery_mode CcApp#recovery_mode}
    */
    readonly recoveryMode?: boolean | cdktn.IResolvable;
    /**
    * The instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_app#resource_spec CcApp#resource_spec}
    */
    readonly resourceSpec?: CcApp.ResourceSpecProperty;
    /**
    * A list of tags to apply to the app.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_app#tags CcApp#tags}
    */
    readonly tags?: CcApp.TagProperty[] | cdktn.IResolvable;
    /**
    * The user profile name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_app#user_profile_name CcApp#user_profile_name}
    */
    readonly userProfileName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_app awscc_sagemaker_app}
*/
export class CcApp extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_sagemaker_app";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcApp resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcApp to import
    * @param importFromId The id of the existing CcApp that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_app#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcApp to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_sagemaker_app", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_app awscc_sagemaker_app} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcAppProps
    */
    public constructor(scope: Construct, id: string, config: CcAppProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_sagemaker_app',
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
        this._appName = config.appName;
        this._appType = config.appType;
        this._domainId = config.domainId;
        this._recoveryMode = config.recoveryMode;
        this._resourceSpec.internalValue = config.resourceSpec;
        this._tags.internalValue = config.tags;
        this._userProfileName = config.userProfileName;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // app_arn - computed: true, optional: false, required: false
    public get appArn() {
        return this.getStringAttribute('app_arn');
    }

    // app_name - computed: false, optional: false, required: true
    private _appName?: string; 
    public get appName() {
        return this.getStringAttribute('app_name');
    }
    public set appName(value: string) {
        this._appName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get appNameInput() {
        return this._appName;
    }

    // app_type - computed: false, optional: false, required: true
    private _appType?: string; 
    public get appType() {
        return this.getStringAttribute('app_type');
    }
    public set appType(value: string) {
        this._appType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get appTypeInput() {
        return this._appType;
    }

    // built_in_lifecycle_config_arn - computed: true, optional: false, required: false
    public get builtInLifecycleConfigArn() {
        return this.getStringAttribute('built_in_lifecycle_config_arn');
    }

    // domain_id - computed: false, optional: false, required: true
    private _domainId?: string; 
    public get domainId() {
        return this.getStringAttribute('domain_id');
    }
    public set domainId(value: string) {
        this._domainId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get domainIdInput() {
        return this._domainId;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // recovery_mode - computed: true, optional: true, required: false
    private _recoveryMode?: boolean | cdktn.IResolvable; 
    public get recoveryMode() {
        return this.getBooleanAttribute('recovery_mode');
    }
    public set recoveryMode(value: boolean | cdktn.IResolvable) {
        this._recoveryMode = value;
    }
    public resetRecoveryMode() {
        this._recoveryMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get recoveryModeInput() {
        return this._recoveryMode;
    }

    // resource_spec - computed: true, optional: true, required: false
    private _resourceSpec = new CcApp.ResourceSpecPropertyOutputReference(this, "resource_spec");
    public get resourceSpec() {
        return this._resourceSpec;
    }
    public putResourceSpec(value: CcApp.ResourceSpecProperty) {
        this._resourceSpec.internalValue = value;
    }
    public resetResourceSpec() {
        this._resourceSpec.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceSpecInput() {
        return this._resourceSpec.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcApp.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcApp.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // user_profile_name - computed: false, optional: false, required: true
    private _userProfileName?: string; 
    public get userProfileName() {
        return this.getStringAttribute('user_profile_name');
    }
    public set userProfileName(value: string) {
        this._userProfileName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get userProfileNameInput() {
        return this._userProfileName;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            app_name: cdktn.stringToTerraform(this._appName),
            app_type: cdktn.stringToTerraform(this._appType),
            domain_id: cdktn.stringToTerraform(this._domainId),
            recovery_mode: cdktn.booleanToTerraform(this._recoveryMode),
            resource_spec: ccAppResourceSpecPropertyToTerraform(this._resourceSpec.internalValue),
            tags: cdktn.listMapper(ccAppTagPropertyToTerraform, false)(this._tags.internalValue),
            user_profile_name: cdktn.stringToTerraform(this._userProfileName),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            app_name: {
                value: cdktn.stringToHclTerraform(this._appName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            app_type: {
                value: cdktn.stringToHclTerraform(this._appType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            domain_id: {
                value: cdktn.stringToHclTerraform(this._domainId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            recovery_mode: {
                value: cdktn.booleanToHclTerraform(this._recoveryMode),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            resource_spec: {
                value: ccAppResourceSpecPropertyToHclTerraform(this._resourceSpec.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcApp.ResourceSpecProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccAppTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcApp.TagPropertyList",
            },
            user_profile_name: {
                value: cdktn.stringToHclTerraform(this._userProfileName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccAppResourceSpecPropertyToTerraform(struct?: CcApp.ResourceSpecProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        instance_type: cdktn.stringToTerraform(struct!.instanceType),
        lifecycle_config_arn: cdktn.stringToTerraform(struct!.lifecycleConfigArn),
        sage_maker_image_arn: cdktn.stringToTerraform(struct!.sageMakerImageArn),
        sage_maker_image_version_arn: cdktn.stringToTerraform(struct!.sageMakerImageVersionArn),
    }
}


export function ccAppResourceSpecPropertyToHclTerraform(struct?: CcApp.ResourceSpecProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        instance_type: {
            value: cdktn.stringToHclTerraform(struct!.instanceType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        lifecycle_config_arn: {
            value: cdktn.stringToHclTerraform(struct!.lifecycleConfigArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sage_maker_image_arn: {
            value: cdktn.stringToHclTerraform(struct!.sageMakerImageArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sage_maker_image_version_arn: {
            value: cdktn.stringToHclTerraform(struct!.sageMakerImageVersionArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAppTagPropertyToTerraform(struct?: CcApp.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccAppTagPropertyToHclTerraform(struct?: CcApp.TagProperty | cdktn.IResolvable): any {
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


export namespace CcApp {
export interface ResourceSpecProperty {
    /**
    * The instance type that the image version runs on.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_app#instance_type CcApp#instance_type}
    */
    readonly instanceType?: string;
    /**
    * The Amazon Resource Name (ARN) of the Lifecycle Configuration to attach to the Resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_app#lifecycle_config_arn CcApp#lifecycle_config_arn}
    */
    readonly lifecycleConfigArn?: string;
    /**
    * The ARN of the SageMaker image that the image version belongs to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_app#sage_maker_image_arn CcApp#sage_maker_image_arn}
    */
    readonly sageMakerImageArn?: string;
    /**
    * The ARN of the image version created on the instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_app#sage_maker_image_version_arn CcApp#sage_maker_image_version_arn}
    */
    readonly sageMakerImageVersionArn?: string;
}
export class ResourceSpecPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ResourceSpecProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._instanceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceType = this._instanceType;
        }
        if (this._lifecycleConfigArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.lifecycleConfigArn = this._lifecycleConfigArn;
        }
        if (this._sageMakerImageArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.sageMakerImageArn = this._sageMakerImageArn;
        }
        if (this._sageMakerImageVersionArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.sageMakerImageVersionArn = this._sageMakerImageVersionArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ResourceSpecProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._instanceType = undefined;
            this._lifecycleConfigArn = undefined;
            this._sageMakerImageArn = undefined;
            this._sageMakerImageVersionArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._instanceType = value.instanceType;
            this._lifecycleConfigArn = value.lifecycleConfigArn;
            this._sageMakerImageArn = value.sageMakerImageArn;
            this._sageMakerImageVersionArn = value.sageMakerImageVersionArn;
        }
    }

    // instance_type - computed: true, optional: true, required: false
    private _instanceType?: string; 
    public get instanceType() {
        return this.getStringAttribute('instance_type');
    }
    public set instanceType(value: string) {
        this._instanceType = value;
    }
    public resetInstanceType() {
        this._instanceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceTypeInput() {
        return this._instanceType;
    }

    // lifecycle_config_arn - computed: true, optional: true, required: false
    private _lifecycleConfigArn?: string; 
    public get lifecycleConfigArn() {
        return this.getStringAttribute('lifecycle_config_arn');
    }
    public set lifecycleConfigArn(value: string) {
        this._lifecycleConfigArn = value;
    }
    public resetLifecycleConfigArn() {
        this._lifecycleConfigArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lifecycleConfigArnInput() {
        return this._lifecycleConfigArn;
    }

    // sage_maker_image_arn - computed: true, optional: true, required: false
    private _sageMakerImageArn?: string; 
    public get sageMakerImageArn() {
        return this.getStringAttribute('sage_maker_image_arn');
    }
    public set sageMakerImageArn(value: string) {
        this._sageMakerImageArn = value;
    }
    public resetSageMakerImageArn() {
        this._sageMakerImageArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sageMakerImageArnInput() {
        return this._sageMakerImageArn;
    }

    // sage_maker_image_version_arn - computed: true, optional: true, required: false
    private _sageMakerImageVersionArn?: string; 
    public get sageMakerImageVersionArn() {
        return this.getStringAttribute('sage_maker_image_version_arn');
    }
    public set sageMakerImageVersionArn(value: string) {
        this._sageMakerImageVersionArn = value;
    }
    public resetSageMakerImageVersionArn() {
        this._sageMakerImageVersionArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sageMakerImageVersionArnInput() {
        return this._sageMakerImageVersionArn;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_app#key CcApp#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/sagemaker_app#value CcApp#value}
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
