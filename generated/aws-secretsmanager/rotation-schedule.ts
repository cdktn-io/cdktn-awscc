// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/secretsmanager_rotation_schedule

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcRotationScheduleProps extends cdktn.TerraformMetaArguments {
    /**
    * The list of metadata needed to successfully rotate a managed external secret.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/secretsmanager_rotation_schedule#external_secret_rotation_metadata CcRotationSchedule#external_secret_rotation_metadata}
    */
    readonly externalSecretRotationMetadata?: CcRotationSchedule.ExternalSecretRotationMetadataItemProperty[] | cdktn.IResolvable;
    /**
    * The ARN of the IAM role that is used by Secrets Manager to rotate a managed external secret.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/secretsmanager_rotation_schedule#external_secret_rotation_role_arn CcRotationSchedule#external_secret_rotation_role_arn}
    */
    readonly externalSecretRotationRoleArn?: string;
    /**
    * Creates a new Lambda rotation function based on one of the Secrets Manager rotation function templates. To use a rotation function that already exists, specify RotationLambdaARN instead.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/secretsmanager_rotation_schedule#hosted_rotation_lambda CcRotationSchedule#hosted_rotation_lambda}
    */
    readonly hostedRotationLambda?: CcRotationSchedule.HostedRotationLambdaProperty;
    /**
    * Specifies whether to rotate the secret immediately or wait until the next scheduled rotation window.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/secretsmanager_rotation_schedule#rotate_immediately_on_update CcRotationSchedule#rotate_immediately_on_update}
    */
    readonly rotateImmediatelyOnUpdate?: boolean | cdktn.IResolvable;
    /**
    * The ARN of an existing Lambda rotation function. To specify a rotation function that is also defined in this template, use the Ref function.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/secretsmanager_rotation_schedule#rotation_lambda_arn CcRotationSchedule#rotation_lambda_arn}
    */
    readonly rotationLambdaArn?: string;
    /**
    * A structure that defines the rotation configuration for this secret.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/secretsmanager_rotation_schedule#rotation_rules CcRotationSchedule#rotation_rules}
    */
    readonly rotationRules?: CcRotationSchedule.RotationRulesProperty;
    /**
    * The ARN or name of the secret to rotate.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/secretsmanager_rotation_schedule#secret_id CcRotationSchedule#secret_id}
    */
    readonly secretId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/secretsmanager_rotation_schedule awscc_secretsmanager_rotation_schedule}
*/
export class CcRotationSchedule extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_secretsmanager_rotation_schedule";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcRotationSchedule resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcRotationSchedule to import
    * @param importFromId The id of the existing CcRotationSchedule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/secretsmanager_rotation_schedule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcRotationSchedule to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_secretsmanager_rotation_schedule", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/secretsmanager_rotation_schedule awscc_secretsmanager_rotation_schedule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcRotationScheduleProps
    */
    public constructor(scope: Construct, id: string, config: CcRotationScheduleProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_secretsmanager_rotation_schedule',
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
        this._externalSecretRotationMetadata.internalValue = config.externalSecretRotationMetadata;
        this._externalSecretRotationRoleArn = config.externalSecretRotationRoleArn;
        this._hostedRotationLambda.internalValue = config.hostedRotationLambda;
        this._rotateImmediatelyOnUpdate = config.rotateImmediatelyOnUpdate;
        this._rotationLambdaArn = config.rotationLambdaArn;
        this._rotationRules.internalValue = config.rotationRules;
        this._secretId = config.secretId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // external_secret_rotation_metadata - computed: true, optional: true, required: false
    private _externalSecretRotationMetadata = new CcRotationSchedule.ExternalSecretRotationMetadataItemPropertyList(this, "external_secret_rotation_metadata", false);
    public get externalSecretRotationMetadata() {
        return this._externalSecretRotationMetadata;
    }
    public putExternalSecretRotationMetadata(value: CcRotationSchedule.ExternalSecretRotationMetadataItemProperty[] | cdktn.IResolvable) {
        this._externalSecretRotationMetadata.internalValue = value;
    }
    public resetExternalSecretRotationMetadata() {
        this._externalSecretRotationMetadata.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get externalSecretRotationMetadataInput() {
        return this._externalSecretRotationMetadata.internalValue;
    }

    // external_secret_rotation_role_arn - computed: true, optional: true, required: false
    private _externalSecretRotationRoleArn?: string; 
    public get externalSecretRotationRoleArn() {
        return this.getStringAttribute('external_secret_rotation_role_arn');
    }
    public set externalSecretRotationRoleArn(value: string) {
        this._externalSecretRotationRoleArn = value;
    }
    public resetExternalSecretRotationRoleArn() {
        this._externalSecretRotationRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get externalSecretRotationRoleArnInput() {
        return this._externalSecretRotationRoleArn;
    }

    // hosted_rotation_lambda - computed: true, optional: true, required: false
    private _hostedRotationLambda = new CcRotationSchedule.HostedRotationLambdaPropertyOutputReference(this, "hosted_rotation_lambda");
    public get hostedRotationLambda() {
        return this._hostedRotationLambda;
    }
    public putHostedRotationLambda(value: CcRotationSchedule.HostedRotationLambdaProperty) {
        this._hostedRotationLambda.internalValue = value;
    }
    public resetHostedRotationLambda() {
        this._hostedRotationLambda.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostedRotationLambdaInput() {
        return this._hostedRotationLambda.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // rotate_immediately_on_update - computed: true, optional: true, required: false
    private _rotateImmediatelyOnUpdate?: boolean | cdktn.IResolvable; 
    public get rotateImmediatelyOnUpdate() {
        return this.getBooleanAttribute('rotate_immediately_on_update');
    }
    public set rotateImmediatelyOnUpdate(value: boolean | cdktn.IResolvable) {
        this._rotateImmediatelyOnUpdate = value;
    }
    public resetRotateImmediatelyOnUpdate() {
        this._rotateImmediatelyOnUpdate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rotateImmediatelyOnUpdateInput() {
        return this._rotateImmediatelyOnUpdate;
    }

    // rotation_lambda_arn - computed: true, optional: true, required: false
    private _rotationLambdaArn?: string; 
    public get rotationLambdaArn() {
        return this.getStringAttribute('rotation_lambda_arn');
    }
    public set rotationLambdaArn(value: string) {
        this._rotationLambdaArn = value;
    }
    public resetRotationLambdaArn() {
        this._rotationLambdaArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rotationLambdaArnInput() {
        return this._rotationLambdaArn;
    }

    // rotation_rules - computed: true, optional: true, required: false
    private _rotationRules = new CcRotationSchedule.RotationRulesPropertyOutputReference(this, "rotation_rules");
    public get rotationRules() {
        return this._rotationRules;
    }
    public putRotationRules(value: CcRotationSchedule.RotationRulesProperty) {
        this._rotationRules.internalValue = value;
    }
    public resetRotationRules() {
        this._rotationRules.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rotationRulesInput() {
        return this._rotationRules.internalValue;
    }

    // rotation_schedule_id - computed: true, optional: false, required: false
    public get rotationScheduleId() {
        return this.getStringAttribute('rotation_schedule_id');
    }

    // secret_id - computed: false, optional: false, required: true
    private _secretId?: string; 
    public get secretId() {
        return this.getStringAttribute('secret_id');
    }
    public set secretId(value: string) {
        this._secretId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get secretIdInput() {
        return this._secretId;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            external_secret_rotation_metadata: cdktn.listMapper(ccRotationScheduleExternalSecretRotationMetadataItemPropertyToTerraform, false)(this._externalSecretRotationMetadata.internalValue),
            external_secret_rotation_role_arn: cdktn.stringToTerraform(this._externalSecretRotationRoleArn),
            hosted_rotation_lambda: ccRotationScheduleHostedRotationLambdaPropertyToTerraform(this._hostedRotationLambda.internalValue),
            rotate_immediately_on_update: cdktn.booleanToTerraform(this._rotateImmediatelyOnUpdate),
            rotation_lambda_arn: cdktn.stringToTerraform(this._rotationLambdaArn),
            rotation_rules: ccRotationScheduleRotationRulesPropertyToTerraform(this._rotationRules.internalValue),
            secret_id: cdktn.stringToTerraform(this._secretId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            external_secret_rotation_metadata: {
                value: cdktn.listMapperHcl(ccRotationScheduleExternalSecretRotationMetadataItemPropertyToHclTerraform, false)(this._externalSecretRotationMetadata.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcRotationSchedule.ExternalSecretRotationMetadataItemPropertyList",
            },
            external_secret_rotation_role_arn: {
                value: cdktn.stringToHclTerraform(this._externalSecretRotationRoleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            hosted_rotation_lambda: {
                value: ccRotationScheduleHostedRotationLambdaPropertyToHclTerraform(this._hostedRotationLambda.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcRotationSchedule.HostedRotationLambdaProperty",
            },
            rotate_immediately_on_update: {
                value: cdktn.booleanToHclTerraform(this._rotateImmediatelyOnUpdate),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            rotation_lambda_arn: {
                value: cdktn.stringToHclTerraform(this._rotationLambdaArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            rotation_rules: {
                value: ccRotationScheduleRotationRulesPropertyToHclTerraform(this._rotationRules.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcRotationSchedule.RotationRulesProperty",
            },
            secret_id: {
                value: cdktn.stringToHclTerraform(this._secretId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccRotationScheduleExternalSecretRotationMetadataItemPropertyToTerraform(struct?: CcRotationSchedule.ExternalSecretRotationMetadataItemProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccRotationScheduleExternalSecretRotationMetadataItemPropertyToHclTerraform(struct?: CcRotationSchedule.ExternalSecretRotationMetadataItemProperty | cdktn.IResolvable): any {
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


export function ccRotationScheduleHostedRotationLambdaPropertyToTerraform(struct?: CcRotationSchedule.HostedRotationLambdaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        exclude_characters: cdktn.stringToTerraform(struct!.excludeCharacters),
        kms_key_arn: cdktn.stringToTerraform(struct!.kmsKeyArn),
        master_secret_arn: cdktn.stringToTerraform(struct!.masterSecretArn),
        master_secret_kms_key_arn: cdktn.stringToTerraform(struct!.masterSecretKmsKeyArn),
        rotation_lambda_name: cdktn.stringToTerraform(struct!.rotationLambdaName),
        rotation_type: cdktn.stringToTerraform(struct!.rotationType),
        runtime: cdktn.stringToTerraform(struct!.runtime),
        superuser_secret_arn: cdktn.stringToTerraform(struct!.superuserSecretArn),
        superuser_secret_kms_key_arn: cdktn.stringToTerraform(struct!.superuserSecretKmsKeyArn),
        vpc_security_group_ids: cdktn.stringToTerraform(struct!.vpcSecurityGroupIds),
        vpc_subnet_ids: cdktn.stringToTerraform(struct!.vpcSubnetIds),
    }
}


export function ccRotationScheduleHostedRotationLambdaPropertyToHclTerraform(struct?: CcRotationSchedule.HostedRotationLambdaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        exclude_characters: {
            value: cdktn.stringToHclTerraform(struct!.excludeCharacters),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        kms_key_arn: {
            value: cdktn.stringToHclTerraform(struct!.kmsKeyArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        master_secret_arn: {
            value: cdktn.stringToHclTerraform(struct!.masterSecretArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        master_secret_kms_key_arn: {
            value: cdktn.stringToHclTerraform(struct!.masterSecretKmsKeyArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        rotation_lambda_name: {
            value: cdktn.stringToHclTerraform(struct!.rotationLambdaName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        rotation_type: {
            value: cdktn.stringToHclTerraform(struct!.rotationType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        runtime: {
            value: cdktn.stringToHclTerraform(struct!.runtime),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        superuser_secret_arn: {
            value: cdktn.stringToHclTerraform(struct!.superuserSecretArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        superuser_secret_kms_key_arn: {
            value: cdktn.stringToHclTerraform(struct!.superuserSecretKmsKeyArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        vpc_security_group_ids: {
            value: cdktn.stringToHclTerraform(struct!.vpcSecurityGroupIds),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        vpc_subnet_ids: {
            value: cdktn.stringToHclTerraform(struct!.vpcSubnetIds),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRotationScheduleRotationRulesPropertyToTerraform(struct?: CcRotationSchedule.RotationRulesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        automatically_after_days: cdktn.numberToTerraform(struct!.automaticallyAfterDays),
        duration: cdktn.stringToTerraform(struct!.duration),
        schedule_expression: cdktn.stringToTerraform(struct!.scheduleExpression),
    }
}


export function ccRotationScheduleRotationRulesPropertyToHclTerraform(struct?: CcRotationSchedule.RotationRulesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        automatically_after_days: {
            value: cdktn.numberToHclTerraform(struct!.automaticallyAfterDays),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        duration: {
            value: cdktn.stringToHclTerraform(struct!.duration),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        schedule_expression: {
            value: cdktn.stringToHclTerraform(struct!.scheduleExpression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcRotationSchedule {
export interface ExternalSecretRotationMetadataItemProperty {
    /**
    * The key name of the metadata item. You can specify a value that's 1 to 256 characters in length.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/secretsmanager_rotation_schedule#key CcRotationSchedule#key}
    */
    readonly key?: string;
    /**
    * The value for the metadata item. You can specify a value that's 1 to 2048 characters in length.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/secretsmanager_rotation_schedule#value CcRotationSchedule#value}
    */
    readonly value?: string;
}
export class ExternalSecretRotationMetadataItemPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ExternalSecretRotationMetadataItemProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: ExternalSecretRotationMetadataItemProperty | cdktn.IResolvable | undefined) {
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

export class ExternalSecretRotationMetadataItemPropertyList extends cdktn.ComplexList {
    public internalValue? : ExternalSecretRotationMetadataItemProperty[] | cdktn.IResolvable

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
    public get(index: number): ExternalSecretRotationMetadataItemPropertyOutputReference {
        return new ExternalSecretRotationMetadataItemPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface HostedRotationLambdaProperty {
    /**
    * A string of the characters that you don't want in the password.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/secretsmanager_rotation_schedule#exclude_characters CcRotationSchedule#exclude_characters}
    */
    readonly excludeCharacters?: string;
    /**
    * The ARN of the KMS key that Secrets Manager uses to encrypt the secret. If you don't specify this value, then Secrets Manager uses the key aws/secretsmanager. If aws/secretsmanager doesn't yet exist, then Secrets Manager creates it for you automatically the first time it encrypts the secret value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/secretsmanager_rotation_schedule#kms_key_arn CcRotationSchedule#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * The ARN of the secret that contains superuser credentials, if you use the alternating users rotation strategy. CloudFormation grants the execution role for the Lambda rotation function GetSecretValue permission to the secret in this property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/secretsmanager_rotation_schedule#master_secret_arn CcRotationSchedule#master_secret_arn}
    */
    readonly masterSecretArn?: string;
    /**
    * The ARN of the KMS key that Secrets Manager used to encrypt the superuser secret, if you use the alternating users strategy and the superuser secret is encrypted with a customer managed key. You don't need to specify this property if the superuser secret is encrypted using the key aws/secretsmanager. CloudFormation grants the execution role for the Lambda rotation function Decrypt, DescribeKey, and GenerateDataKey permission to the key in this property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/secretsmanager_rotation_schedule#master_secret_kms_key_arn CcRotationSchedule#master_secret_kms_key_arn}
    */
    readonly masterSecretKmsKeyArn?: string;
    /**
    * The name of the Lambda rotation function.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/secretsmanager_rotation_schedule#rotation_lambda_name CcRotationSchedule#rotation_lambda_name}
    */
    readonly rotationLambdaName?: string;
    /**
    * The type of rotation template to use
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/secretsmanager_rotation_schedule#rotation_type CcRotationSchedule#rotation_type}
    */
    readonly rotationType?: string;
    /**
    * The python runtime associated with the Lambda function
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/secretsmanager_rotation_schedule#runtime CcRotationSchedule#runtime}
    */
    readonly runtime?: string;
    /**
    * The ARN of the secret that contains superuser credentials, if you use the alternating users rotation strategy. CloudFormation grants the execution role for the Lambda rotation function GetSecretValue permission to the secret in this property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/secretsmanager_rotation_schedule#superuser_secret_arn CcRotationSchedule#superuser_secret_arn}
    */
    readonly superuserSecretArn?: string;
    /**
    * The ARN of the KMS key that Secrets Manager used to encrypt the superuser secret, if you use the alternating users strategy and the superuser secret is encrypted with a customer managed key. You don't need to specify this property if the superuser secret is encrypted using the key aws/secretsmanager. CloudFormation grants the execution role for the Lambda rotation function Decrypt, DescribeKey, and GenerateDataKey permission to the key in this property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/secretsmanager_rotation_schedule#superuser_secret_kms_key_arn CcRotationSchedule#superuser_secret_kms_key_arn}
    */
    readonly superuserSecretKmsKeyArn?: string;
    /**
    * A comma-separated list of security group IDs applied to the target database.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/secretsmanager_rotation_schedule#vpc_security_group_ids CcRotationSchedule#vpc_security_group_ids}
    */
    readonly vpcSecurityGroupIds?: string;
    /**
    * A comma separated list of VPC subnet IDs of the target database network. The Lambda rotation function is in the same subnet group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/secretsmanager_rotation_schedule#vpc_subnet_ids CcRotationSchedule#vpc_subnet_ids}
    */
    readonly vpcSubnetIds?: string;
}
export class HostedRotationLambdaPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HostedRotationLambdaProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._excludeCharacters !== undefined) {
            hasAnyValues = true;
            internalValueResult.excludeCharacters = this._excludeCharacters;
        }
        if (this._kmsKeyArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsKeyArn = this._kmsKeyArn;
        }
        if (this._masterSecretArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.masterSecretArn = this._masterSecretArn;
        }
        if (this._masterSecretKmsKeyArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.masterSecretKmsKeyArn = this._masterSecretKmsKeyArn;
        }
        if (this._rotationLambdaName !== undefined) {
            hasAnyValues = true;
            internalValueResult.rotationLambdaName = this._rotationLambdaName;
        }
        if (this._rotationType !== undefined) {
            hasAnyValues = true;
            internalValueResult.rotationType = this._rotationType;
        }
        if (this._runtime !== undefined) {
            hasAnyValues = true;
            internalValueResult.runtime = this._runtime;
        }
        if (this._superuserSecretArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.superuserSecretArn = this._superuserSecretArn;
        }
        if (this._superuserSecretKmsKeyArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.superuserSecretKmsKeyArn = this._superuserSecretKmsKeyArn;
        }
        if (this._vpcSecurityGroupIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.vpcSecurityGroupIds = this._vpcSecurityGroupIds;
        }
        if (this._vpcSubnetIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.vpcSubnetIds = this._vpcSubnetIds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HostedRotationLambdaProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._excludeCharacters = undefined;
            this._kmsKeyArn = undefined;
            this._masterSecretArn = undefined;
            this._masterSecretKmsKeyArn = undefined;
            this._rotationLambdaName = undefined;
            this._rotationType = undefined;
            this._runtime = undefined;
            this._superuserSecretArn = undefined;
            this._superuserSecretKmsKeyArn = undefined;
            this._vpcSecurityGroupIds = undefined;
            this._vpcSubnetIds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._excludeCharacters = value.excludeCharacters;
            this._kmsKeyArn = value.kmsKeyArn;
            this._masterSecretArn = value.masterSecretArn;
            this._masterSecretKmsKeyArn = value.masterSecretKmsKeyArn;
            this._rotationLambdaName = value.rotationLambdaName;
            this._rotationType = value.rotationType;
            this._runtime = value.runtime;
            this._superuserSecretArn = value.superuserSecretArn;
            this._superuserSecretKmsKeyArn = value.superuserSecretKmsKeyArn;
            this._vpcSecurityGroupIds = value.vpcSecurityGroupIds;
            this._vpcSubnetIds = value.vpcSubnetIds;
        }
    }

    // exclude_characters - computed: true, optional: true, required: false
    private _excludeCharacters?: string; 
    public get excludeCharacters() {
        return this.getStringAttribute('exclude_characters');
    }
    public set excludeCharacters(value: string) {
        this._excludeCharacters = value;
    }
    public resetExcludeCharacters() {
        this._excludeCharacters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get excludeCharactersInput() {
        return this._excludeCharacters;
    }

    // kms_key_arn - computed: true, optional: true, required: false
    private _kmsKeyArn?: string; 
    public get kmsKeyArn() {
        return this.getStringAttribute('kms_key_arn');
    }
    public set kmsKeyArn(value: string) {
        this._kmsKeyArn = value;
    }
    public resetKmsKeyArn() {
        this._kmsKeyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyArnInput() {
        return this._kmsKeyArn;
    }

    // master_secret_arn - computed: true, optional: true, required: false
    private _masterSecretArn?: string; 
    public get masterSecretArn() {
        return this.getStringAttribute('master_secret_arn');
    }
    public set masterSecretArn(value: string) {
        this._masterSecretArn = value;
    }
    public resetMasterSecretArn() {
        this._masterSecretArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get masterSecretArnInput() {
        return this._masterSecretArn;
    }

    // master_secret_kms_key_arn - computed: true, optional: true, required: false
    private _masterSecretKmsKeyArn?: string; 
    public get masterSecretKmsKeyArn() {
        return this.getStringAttribute('master_secret_kms_key_arn');
    }
    public set masterSecretKmsKeyArn(value: string) {
        this._masterSecretKmsKeyArn = value;
    }
    public resetMasterSecretKmsKeyArn() {
        this._masterSecretKmsKeyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get masterSecretKmsKeyArnInput() {
        return this._masterSecretKmsKeyArn;
    }

    // rotation_lambda_name - computed: true, optional: true, required: false
    private _rotationLambdaName?: string; 
    public get rotationLambdaName() {
        return this.getStringAttribute('rotation_lambda_name');
    }
    public set rotationLambdaName(value: string) {
        this._rotationLambdaName = value;
    }
    public resetRotationLambdaName() {
        this._rotationLambdaName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rotationLambdaNameInput() {
        return this._rotationLambdaName;
    }

    // rotation_type - computed: true, optional: true, required: false
    private _rotationType?: string; 
    public get rotationType() {
        return this.getStringAttribute('rotation_type');
    }
    public set rotationType(value: string) {
        this._rotationType = value;
    }
    public resetRotationType() {
        this._rotationType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rotationTypeInput() {
        return this._rotationType;
    }

    // runtime - computed: true, optional: true, required: false
    private _runtime?: string; 
    public get runtime() {
        return this.getStringAttribute('runtime');
    }
    public set runtime(value: string) {
        this._runtime = value;
    }
    public resetRuntime() {
        this._runtime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get runtimeInput() {
        return this._runtime;
    }

    // superuser_secret_arn - computed: true, optional: true, required: false
    private _superuserSecretArn?: string; 
    public get superuserSecretArn() {
        return this.getStringAttribute('superuser_secret_arn');
    }
    public set superuserSecretArn(value: string) {
        this._superuserSecretArn = value;
    }
    public resetSuperuserSecretArn() {
        this._superuserSecretArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get superuserSecretArnInput() {
        return this._superuserSecretArn;
    }

    // superuser_secret_kms_key_arn - computed: true, optional: true, required: false
    private _superuserSecretKmsKeyArn?: string; 
    public get superuserSecretKmsKeyArn() {
        return this.getStringAttribute('superuser_secret_kms_key_arn');
    }
    public set superuserSecretKmsKeyArn(value: string) {
        this._superuserSecretKmsKeyArn = value;
    }
    public resetSuperuserSecretKmsKeyArn() {
        this._superuserSecretKmsKeyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get superuserSecretKmsKeyArnInput() {
        return this._superuserSecretKmsKeyArn;
    }

    // vpc_security_group_ids - computed: true, optional: true, required: false
    private _vpcSecurityGroupIds?: string; 
    public get vpcSecurityGroupIds() {
        return this.getStringAttribute('vpc_security_group_ids');
    }
    public set vpcSecurityGroupIds(value: string) {
        this._vpcSecurityGroupIds = value;
    }
    public resetVpcSecurityGroupIds() {
        this._vpcSecurityGroupIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcSecurityGroupIdsInput() {
        return this._vpcSecurityGroupIds;
    }

    // vpc_subnet_ids - computed: true, optional: true, required: false
    private _vpcSubnetIds?: string; 
    public get vpcSubnetIds() {
        return this.getStringAttribute('vpc_subnet_ids');
    }
    public set vpcSubnetIds(value: string) {
        this._vpcSubnetIds = value;
    }
    public resetVpcSubnetIds() {
        this._vpcSubnetIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcSubnetIdsInput() {
        return this._vpcSubnetIds;
    }
}
export interface RotationRulesProperty {
    /**
    * The number of days between automatic scheduled rotations of the secret. You can use this value to check that your secret meets your compliance guidelines for how often secrets must be rotated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/secretsmanager_rotation_schedule#automatically_after_days CcRotationSchedule#automatically_after_days}
    */
    readonly automaticallyAfterDays?: number;
    /**
    * The length of the rotation window in hours, for example 3h for a three hour window. Secrets Manager rotates your secret at any time during this window. The window must not extend into the next rotation window or the next UTC day. The window starts according to the ScheduleExpression. If you don't specify a Duration, for a ScheduleExpression in hours, the window automatically closes after one hour. For a ScheduleExpression in days, the window automatically closes at the end of the UTC day.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/secretsmanager_rotation_schedule#duration CcRotationSchedule#duration}
    */
    readonly duration?: string;
    /**
    * A cron() or rate() expression that defines the schedule for rotating your secret. Secrets Manager rotation schedules use UTC time zone.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/secretsmanager_rotation_schedule#schedule_expression CcRotationSchedule#schedule_expression}
    */
    readonly scheduleExpression?: string;
}
export class RotationRulesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RotationRulesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._automaticallyAfterDays !== undefined) {
            hasAnyValues = true;
            internalValueResult.automaticallyAfterDays = this._automaticallyAfterDays;
        }
        if (this._duration !== undefined) {
            hasAnyValues = true;
            internalValueResult.duration = this._duration;
        }
        if (this._scheduleExpression !== undefined) {
            hasAnyValues = true;
            internalValueResult.scheduleExpression = this._scheduleExpression;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RotationRulesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._automaticallyAfterDays = undefined;
            this._duration = undefined;
            this._scheduleExpression = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._automaticallyAfterDays = value.automaticallyAfterDays;
            this._duration = value.duration;
            this._scheduleExpression = value.scheduleExpression;
        }
    }

    // automatically_after_days - computed: true, optional: true, required: false
    private _automaticallyAfterDays?: number; 
    public get automaticallyAfterDays() {
        return this.getNumberAttribute('automatically_after_days');
    }
    public set automaticallyAfterDays(value: number) {
        this._automaticallyAfterDays = value;
    }
    public resetAutomaticallyAfterDays() {
        this._automaticallyAfterDays = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get automaticallyAfterDaysInput() {
        return this._automaticallyAfterDays;
    }

    // duration - computed: true, optional: true, required: false
    private _duration?: string; 
    public get duration() {
        return this.getStringAttribute('duration');
    }
    public set duration(value: string) {
        this._duration = value;
    }
    public resetDuration() {
        this._duration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get durationInput() {
        return this._duration;
    }

    // schedule_expression - computed: true, optional: true, required: false
    private _scheduleExpression?: string; 
    public get scheduleExpression() {
        return this.getStringAttribute('schedule_expression');
    }
    public set scheduleExpression(value: string) {
        this._scheduleExpression = value;
    }
    public resetScheduleExpression() {
        this._scheduleExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduleExpressionInput() {
        return this._scheduleExpression;
    }
}
}
