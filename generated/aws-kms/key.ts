// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/kms_key

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcKeyProps extends cdktn.TerraformMetaArguments {
    /**
    * Skips ("bypasses") the key policy lockout safety check. The default value is false.
    *   Setting this value to true increases the risk that the KMS key becomes unmanageable. Do not set this value to true indiscriminately.
    *  For more information, see [Default key policy](https://docs.aws.amazon.com/kms/latest/developerguide/key-policy-default.html#prevent-unmanageable-key) in the *Developer Guide*.
    *   Use this parameter only when you intend to prevent the principal that is making the request from making a subsequent [PutKeyPolicy](https://docs.aws.amazon.com/kms/latest/APIReference/API_PutKeyPolicy.html) request on the KMS key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/kms_key#bypass_policy_lockout_safety_check CcKey#bypass_policy_lockout_safety_check}
    */
    readonly bypassPolicyLockoutSafetyCheck?: boolean | cdktn.IResolvable;
    /**
    * A description of the KMS key. Use a description that helps you to distinguish this KMS key from others in the account, such as its intended use.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/kms_key#description CcKey#description}
    */
    readonly description?: string;
    /**
    * Enables automatic rotation of the key material for the specified KMS key. By default, automatic key rotation is not enabled.
    *  KMS supports automatic rotation only for symmetric encryption KMS keys (``KeySpec`` = ``SYMMETRIC_DEFAULT``). For asymmetric KMS keys, HMAC KMS keys, and KMS keys with Origin ``EXTERNAL``, omit the ``EnableKeyRotation`` property or set it to ``false``.
    *  To enable automatic key rotation of the key material for a multi-Region KMS key, set ``EnableKeyRotation`` to ``true`` on the primary key (created by using ``AWS::KMS::Key``). KMS copies the rotation status to all replica keys. For details, see [Rotating multi-Region keys](https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-manage.html#multi-region-rotate) in the *Developer Guide*.
    *  When you enable automatic rotation, KMS automatically creates new key material for the KMS key one year after the enable date and every year thereafter. KMS retains all key material until you delete the KMS key. For detailed information about automatic key rotation, see [Rotating KMS keys](https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html) in the *Developer Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/kms_key#enable_key_rotation CcKey#enable_key_rotation}
    */
    readonly enableKeyRotation?: boolean | cdktn.IResolvable;
    /**
    * Specifies whether the KMS key is enabled. Disabled KMS keys cannot be used in cryptographic operations.
    *  When ``Enabled`` is ``true``, the *key state* of the KMS key is ``Enabled``. When ``Enabled`` is ``false``, the key state of the KMS key is ``Disabled``. The default value is ``true``.
    *  The actual key state of the KMS key might be affected by actions taken outside of CloudFormation, such as running the [EnableKey](https://docs.aws.amazon.com/kms/latest/APIReference/API_EnableKey.html), [DisableKey](https://docs.aws.amazon.com/kms/latest/APIReference/API_DisableKey.html), or [ScheduleKeyDeletion](https://docs.aws.amazon.com/kms/latest/APIReference/API_ScheduleKeyDeletion.html) operations.
    *  For information about the key states of a KMS key, see [Key state: Effect on your KMS key](https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html) in the *Developer Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/kms_key#enabled CcKey#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
    /**
    * The key policy to attach to the KMS key.
    *  If you provide a key policy, it must meet the following criteria:
    *   +  The key policy must allow the caller to make a subsequent [PutKeyPolicy](https://docs.aws.amazon.com/kms/latest/APIReference/API_PutKeyPolicy.html) request on the KMS key. This reduces the risk that the KMS key becomes unmanageable. For more information, see [Default key policy](https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html#key-policy-default-allow-root-enable-iam) in the *Developer Guide*. (To omit this condition, set ``BypassPolicyLockoutSafetyCheck`` to true.)
    *   +  Each statement in the key policy must contain one or more principals. The principals in the key policy must exist and be visible to KMS. When you create a new AWS principal (for example, an IAM user or role), you might need to enforce a delay before including the new principal in a key policy because the new principal might not be immediately visible to KMS. For more information, see [Changes that I make are not always immediately visible](https://docs.aws.amazon.com/IAM/latest/UserGuide/troubleshoot_general.html#troubleshoot_general_eventual-consistency) in the *User Guide*.
    *   
    *  If you do not provide a key policy, KMS attaches a default key policy to the KMS key. For more information, see [Default key policy](https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html#key-policy-default) in the *Developer Guide*.
    *  A key policy document can include only the following characters:
    *   +  Printable ASCII characters
    *   +  Printable characters in the Basic Latin and Latin-1 Supplement character set
    *   +  The tab (``\u0009``), line feed (``\u000A``), and carriage return (``\u000D``) special characters
    *   
    *  *Minimum*: ``1``
    *  *Maximum*: ``32768``
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/kms_key#key_policy CcKey#key_policy}
    */
    readonly keyPolicy?: string;
    /**
    * Specifies the type of KMS key to create. The default value, ``SYMMETRIC_DEFAULT``, creates a KMS key with a 256-bit symmetric key for encryption and decryption. In China Regions, ``SYMMETRIC_DEFAULT`` creates a 128-bit symmetric key that uses SM4 encryption. You can't change the ``KeySpec`` value after the KMS key is created. For help choosing a key spec for your KMS key, see [Choosing a KMS key type](https://docs.aws.amazon.com/kms/latest/developerguide/symm-asymm-choose.html) in the *Developer Guide*.
    *  The ``KeySpec`` property determines the type of key material in the KMS key and the algorithms that the KMS key supports. To further restrict the algorithms that can be used with the KMS key, use a condition key in its key policy or IAM policy. For more information, see [condition keys](https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms) in the *Developer Guide*.
    *   If you change the value of the ``KeySpec`` property on an existing KMS key, the update request fails, regardless of the value of the [UpdateReplacePolicy attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-updatereplacepolicy.html). This prevents you from accidentally deleting a KMS key by changing an immutable property value.
    *    [services that are integrated with](https://docs.aws.amazon.com/kms/features/#AWS_Service_Integration) use symmetric encryption KMS keys to protect your data. These services do not support encryption with asymmetric KMS keys. For help determining whether a KMS key is asymmetric, see [Identifying asymmetric KMS keys](https://docs.aws.amazon.com/kms/latest/developerguide/find-symm-asymm.html) in the *Developer Guide*.
    *   KMS supports the following key specs for KMS keys:
    *   +  Symmetric encryption key (default)
    *   +  ``SYMMETRIC_DEFAULT`` (AES-256-GCM)
    *   
    *   +  HMAC keys (symmetric)
    *   +   ``HMAC_224`` 
    *   +   ``HMAC_256`` 
    *   +   ``HMAC_384`` 
    *   +   ``HMAC_512`` 
    *   
    *   +  Asymmetric RSA key pairs (encryption and decryption *or* signing and verification)
    *   +   ``RSA_2048`` 
    *   +   ``RSA_3072`` 
    *   +   ``RSA_4096`` 
    *   
    *   +  Asymmetric NIST-recommended elliptic curve key pairs (signing and verification *or* deriving shared secrets)
    *   +  ``ECC_NIST_P256`` (secp256r1)
    *   +  ``ECC_NIST_P384`` (secp384r1)
    *   +  ``ECC_NIST_P521`` (secp521r1)
    *   +  ``ECC_NIST_EDWARDS25519`` (ed25519) - signing and verification only
    *   +  *Note:* For ECC_NIST_EDWARDS25519 KMS keys, the ED25519_SHA_512 signing algorithm requires [MessageType:RAW](https://docs.aws.amazon.com/kms/latest/APIReference/API_Sign.html#KMS-Sign-request-MessageType), while ED25519_PH_SHA_512 requires [MessageType:DIGEST](https://docs.aws.amazon.com/kms/latest/APIReference/API_Sign.html#KMS-Sign-request-MessageType). These message types cannot be used interchangeably.
    *   
    *   
    *   +  Other asymmetric elliptic curve key pairs (signing and verification)
    *   +  ``ECC_SECG_P256K1`` (secp256k1), commonly used for cryptocurrencies.
    *   
    *   +  Asymmetric ML-DSA key pairs (signing and verification)
    *   +   ``ML_DSA_44`` 
    *   +   ``ML_DSA_65`` 
    *   +   ``ML_DSA_87`` 
    *   
    *   +  SM2 key pairs (encryption and decryption *or* signing and verification *or* deriving shared secrets)
    *   +  ``SM2`` (China Regions only)
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/kms_key#key_spec CcKey#key_spec}
    */
    readonly keySpec?: string;
    /**
    * Determines the [cryptographic operations](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations) for which you can use the KMS key. The default value is ``ENCRYPT_DECRYPT``. This property is required for asymmetric KMS keys and HMAC KMS keys. You can't change the ``KeyUsage`` value after the KMS key is created.
    *   If you change the value of the ``KeyUsage`` property on an existing KMS key, the update request fails, regardless of the value of the [UpdateReplacePolicy attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-updatereplacepolicy.html). This prevents you from accidentally deleting a KMS key by changing an immutable property value.
    *   Select only one valid value.
    *   +  For symmetric encryption KMS keys, omit the parameter or specify ``ENCRYPT_DECRYPT``.
    *   +  For HMAC KMS keys (symmetric), specify ``GENERATE_VERIFY_MAC``.
    *   +  For asymmetric KMS keys with RSA key pairs, specify ``ENCRYPT_DECRYPT`` or ``SIGN_VERIFY``.
    *   +  For asymmetric KMS keys with NIST-recommended elliptic curve key pairs, specify ``SIGN_VERIFY`` or ``KEY_AGREEMENT``.
    *   +  For asymmetric KMS keys with ``ECC_SECG_P256K1`` key pairs, specify ``SIGN_VERIFY``.
    *   +  For asymmetric KMS keys with ML-DSA key pairs, specify ``SIGN_VERIFY``.
    *   +  For asymmetric KMS keys with SM2 key pairs (China Regions only), specify ``ENCRYPT_DECRYPT``, ``SIGN_VERIFY``, or ``KEY_AGREEMENT``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/kms_key#key_usage CcKey#key_usage}
    */
    readonly keyUsage?: string;
    /**
    * Creates a multi-Region primary key that you can replicate in other AWS-Regions. You can't change the ``MultiRegion`` value after the KMS key is created.
    *  For a list of AWS-Regions in which multi-Region keys are supported, see [Multi-Region keys in](https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html) in the **.
    *   If you change the value of the ``MultiRegion`` property on an existing KMS key, the update request fails, regardless of the value of the [UpdateReplacePolicy attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-updatereplacepolicy.html). This prevents you from accidentally deleting a KMS key by changing an immutable property value.
    *   For a multi-Region key, set to this property to ``true``. For a single-Region key, omit this property or set it to ``false``. The default value is ``false``.
    *  *Multi-Region keys* are an KMS feature that lets you create multiple interoperable KMS keys in different AWS-Regions. Because these KMS keys have the same key ID, key material, and other metadata, you can use them to encrypt data in one AWS-Region and decrypt it in a different AWS-Region without making a cross-Region call or exposing the plaintext data. For more information, see [Multi-Region keys](https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html) in the *Developer Guide*.
    *  You can create a symmetric encryption, HMAC, or asymmetric multi-Region KMS key, and you can create a multi-Region key with imported key material. However, you cannot create a multi-Region key in a custom key store.
    *  To create a replica of this primary key in a different AWS-Region , create an [AWS::KMS::ReplicaKey](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-replicakey.html) resource in a CloudFormation stack in the replica Region. Specify the key ARN of this primary key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/kms_key#multi_region CcKey#multi_region}
    */
    readonly multiRegion?: boolean | cdktn.IResolvable;
    /**
    * The source of the key material for the KMS key. You cannot change the origin after you create the KMS key. The default is ``AWS_KMS``, which means that KMS creates the key material.
    *  To [create a KMS key with no key material](https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys-create-cmk.html) (for imported key material), set this value to ``EXTERNAL``. For more information about importing key material into KMS, see [Importing Key Material](https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html) in the *Developer Guide*.
    *  You can ignore ``ENABLED`` when Origin is ``EXTERNAL``. When a KMS key with Origin ``EXTERNAL`` is created, the key state is ``PENDING_IMPORT`` and ``ENABLED`` is ``false``. After you import the key material, ``ENABLED`` updated to ``true``. The KMS key can then be used for Cryptographic Operations. 
    *    +  CFN doesn't support creating an ``Origin`` parameter of the ``AWS_CLOUDHSM`` or ``EXTERNAL_KEY_STORE`` values.
    *   +  ``EXTERNAL`` is not supported for ML-DSA keys.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/kms_key#origin CcKey#origin}
    */
    readonly origin?: string;
    /**
    * Specifies the number of days in the waiting period before KMS deletes a KMS key that has been removed from a CloudFormation stack. Enter a value between 7 and 30 days. The default value is 30 days.
    *  When you remove a KMS key from a CloudFormation stack, KMS schedules the KMS key for deletion and starts the mandatory waiting period. The ``PendingWindowInDays`` property determines the length of waiting period. During the waiting period, the key state of KMS key is ``Pending Deletion`` or ``Pending Replica Deletion``, which prevents the KMS key from being used in cryptographic operations. When the waiting period expires, KMS permanently deletes the KMS key.
    *  KMS will not delete a [multi-Region primary key](https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html) that has replica keys. If you remove a multi-Region primary key from a CloudFormation stack, its key state changes to ``PendingReplicaDeletion`` so it cannot be replicated or used in cryptographic operations. This state can persist indefinitely. When the last of its replica keys is deleted, the key state of the primary key changes to ``PendingDeletion`` and the waiting period specified by ``PendingWindowInDays`` begins. When this waiting period expires, KMS deletes the primary key. For details, see [Deleting multi-Region keys](https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-delete.html) in the *Developer Guide*.
    *  You cannot use a CloudFormation template to cancel deletion of the KMS key after you remove it from the stack, regardless of the waiting period. If you specify a KMS key in your template, even one with the same name, CloudFormation creates a new KMS key. To cancel deletion of a KMS key, use the KMS console or the [CancelKeyDeletion](https://docs.aws.amazon.com/kms/latest/APIReference/API_CancelKeyDeletion.html) operation.
    *  For information about the ``Pending Deletion`` and ``Pending Replica Deletion`` key states, see [Key state: Effect on your KMS key](https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html) in the *Developer Guide*. For more information about deleting KMS keys, see the [ScheduleKeyDeletion](https://docs.aws.amazon.com/kms/latest/APIReference/API_ScheduleKeyDeletion.html) operation in the *API Reference* and [Deleting KMS keys](https://docs.aws.amazon.com/kms/latest/developerguide/deleting-keys.html) in the *Developer Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/kms_key#pending_window_in_days CcKey#pending_window_in_days}
    */
    readonly pendingWindowInDays?: number;
    /**
    * Specifies a custom period of time between each rotation date. If no value is specified, the default value is 365 days.
    *  The rotation period defines the number of days after you enable automatic key rotation that KMS will rotate your key material, and the number of days between each automatic rotation thereafter.
    *  You can use the [kms:RotationPeriodInDays](https://docs.aws.amazon.com/kms/latest/developerguide/conditions-kms.html#conditions-kms-rotation-period-in-days) condition key to further constrain the values that principals can specify in the ``RotationPeriodInDays`` parameter.
    *  For more information about rotating KMS keys and automatic rotation, see [Rotating keys](https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html) in the *Developer Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/kms_key#rotation_period_in_days CcKey#rotation_period_in_days}
    */
    readonly rotationPeriodInDays?: number;
    /**
    * Assigns one or more tags to the replica key.
    *   Tagging or untagging a KMS key can allow or deny permission to the KMS key. For details, see [ABAC for](https://docs.aws.amazon.com/kms/latest/developerguide/abac.html) in the *Developer Guide*.
    *   For information about tags in KMS, see [Tagging keys](https://docs.aws.amazon.com/kms/latest/developerguide/tagging-keys.html) in the *Developer Guide*. For information about tags in CloudFormation, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/kms_key#tags CcKey#tags}
    */
    readonly tags?: CcKey.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/kms_key awscc_kms_key}
*/
export class CcKey extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_kms_key";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcKey resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcKey to import
    * @param importFromId The id of the existing CcKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/kms_key#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcKey to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_kms_key", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/kms_key awscc_kms_key} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcKeyProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcKeyProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_kms_key',
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
        this._bypassPolicyLockoutSafetyCheck = config.bypassPolicyLockoutSafetyCheck;
        this._description = config.description;
        this._enableKeyRotation = config.enableKeyRotation;
        this._enabled = config.enabled;
        this._keyPolicy = config.keyPolicy;
        this._keySpec = config.keySpec;
        this._keyUsage = config.keyUsage;
        this._multiRegion = config.multiRegion;
        this._origin = config.origin;
        this._pendingWindowInDays = config.pendingWindowInDays;
        this._rotationPeriodInDays = config.rotationPeriodInDays;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // bypass_policy_lockout_safety_check - computed: true, optional: true, required: false
    private _bypassPolicyLockoutSafetyCheck?: boolean | cdktn.IResolvable; 
    public get bypassPolicyLockoutSafetyCheck() {
        return this.getBooleanAttribute('bypass_policy_lockout_safety_check');
    }
    public set bypassPolicyLockoutSafetyCheck(value: boolean | cdktn.IResolvable) {
        this._bypassPolicyLockoutSafetyCheck = value;
    }
    public resetBypassPolicyLockoutSafetyCheck() {
        this._bypassPolicyLockoutSafetyCheck = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bypassPolicyLockoutSafetyCheckInput() {
        return this._bypassPolicyLockoutSafetyCheck;
    }

    // description - computed: true, optional: true, required: false
    private _description?: string; 
    public get description() {
        return this.getStringAttribute('description');
    }
    public set description(value: string) {
        this._description = value;
    }
    public resetDescription() {
        this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
        return this._description;
    }

    // enable_key_rotation - computed: true, optional: true, required: false
    private _enableKeyRotation?: boolean | cdktn.IResolvable; 
    public get enableKeyRotation() {
        return this.getBooleanAttribute('enable_key_rotation');
    }
    public set enableKeyRotation(value: boolean | cdktn.IResolvable) {
        this._enableKeyRotation = value;
    }
    public resetEnableKeyRotation() {
        this._enableKeyRotation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableKeyRotationInput() {
        return this._enableKeyRotation;
    }

    // enabled - computed: true, optional: true, required: false
    private _enabled?: boolean | cdktn.IResolvable; 
    public get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    public set enabled(value: boolean | cdktn.IResolvable) {
        this._enabled = value;
    }
    public resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
        return this._enabled;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // key_id - computed: true, optional: false, required: false
    public get keyId() {
        return this.getStringAttribute('key_id');
    }

    // key_policy - computed: true, optional: true, required: false
    private _keyPolicy?: string; 
    public get keyPolicy() {
        return this.getStringAttribute('key_policy');
    }
    public set keyPolicy(value: string) {
        this._keyPolicy = value;
    }
    public resetKeyPolicy() {
        this._keyPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyPolicyInput() {
        return this._keyPolicy;
    }

    // key_spec - computed: true, optional: true, required: false
    private _keySpec?: string; 
    public get keySpec() {
        return this.getStringAttribute('key_spec');
    }
    public set keySpec(value: string) {
        this._keySpec = value;
    }
    public resetKeySpec() {
        this._keySpec = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keySpecInput() {
        return this._keySpec;
    }

    // key_usage - computed: true, optional: true, required: false
    private _keyUsage?: string; 
    public get keyUsage() {
        return this.getStringAttribute('key_usage');
    }
    public set keyUsage(value: string) {
        this._keyUsage = value;
    }
    public resetKeyUsage() {
        this._keyUsage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyUsageInput() {
        return this._keyUsage;
    }

    // multi_region - computed: true, optional: true, required: false
    private _multiRegion?: boolean | cdktn.IResolvable; 
    public get multiRegion() {
        return this.getBooleanAttribute('multi_region');
    }
    public set multiRegion(value: boolean | cdktn.IResolvable) {
        this._multiRegion = value;
    }
    public resetMultiRegion() {
        this._multiRegion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get multiRegionInput() {
        return this._multiRegion;
    }

    // origin - computed: true, optional: true, required: false
    private _origin?: string; 
    public get origin() {
        return this.getStringAttribute('origin');
    }
    public set origin(value: string) {
        this._origin = value;
    }
    public resetOrigin() {
        this._origin = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get originInput() {
        return this._origin;
    }

    // pending_window_in_days - computed: true, optional: true, required: false
    private _pendingWindowInDays?: number; 
    public get pendingWindowInDays() {
        return this.getNumberAttribute('pending_window_in_days');
    }
    public set pendingWindowInDays(value: number) {
        this._pendingWindowInDays = value;
    }
    public resetPendingWindowInDays() {
        this._pendingWindowInDays = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pendingWindowInDaysInput() {
        return this._pendingWindowInDays;
    }

    // rotation_period_in_days - computed: true, optional: true, required: false
    private _rotationPeriodInDays?: number; 
    public get rotationPeriodInDays() {
        return this.getNumberAttribute('rotation_period_in_days');
    }
    public set rotationPeriodInDays(value: number) {
        this._rotationPeriodInDays = value;
    }
    public resetRotationPeriodInDays() {
        this._rotationPeriodInDays = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rotationPeriodInDaysInput() {
        return this._rotationPeriodInDays;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcKey.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcKey.TagProperty[] | cdktn.IResolvable) {
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
            bypass_policy_lockout_safety_check: cdktn.booleanToTerraform(this._bypassPolicyLockoutSafetyCheck),
            description: cdktn.stringToTerraform(this._description),
            enable_key_rotation: cdktn.booleanToTerraform(this._enableKeyRotation),
            enabled: cdktn.booleanToTerraform(this._enabled),
            key_policy: cdktn.stringToTerraform(this._keyPolicy),
            key_spec: cdktn.stringToTerraform(this._keySpec),
            key_usage: cdktn.stringToTerraform(this._keyUsage),
            multi_region: cdktn.booleanToTerraform(this._multiRegion),
            origin: cdktn.stringToTerraform(this._origin),
            pending_window_in_days: cdktn.numberToTerraform(this._pendingWindowInDays),
            rotation_period_in_days: cdktn.numberToTerraform(this._rotationPeriodInDays),
            tags: cdktn.listMapper(ccKeyTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            bypass_policy_lockout_safety_check: {
                value: cdktn.booleanToHclTerraform(this._bypassPolicyLockoutSafetyCheck),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            enable_key_rotation: {
                value: cdktn.booleanToHclTerraform(this._enableKeyRotation),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            enabled: {
                value: cdktn.booleanToHclTerraform(this._enabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            key_policy: {
                value: cdktn.stringToHclTerraform(this._keyPolicy),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            key_spec: {
                value: cdktn.stringToHclTerraform(this._keySpec),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            key_usage: {
                value: cdktn.stringToHclTerraform(this._keyUsage),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            multi_region: {
                value: cdktn.booleanToHclTerraform(this._multiRegion),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            origin: {
                value: cdktn.stringToHclTerraform(this._origin),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            pending_window_in_days: {
                value: cdktn.numberToHclTerraform(this._pendingWindowInDays),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            rotation_period_in_days: {
                value: cdktn.numberToHclTerraform(this._rotationPeriodInDays),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            tags: {
                value: cdktn.listMapperHcl(ccKeyTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcKey.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccKeyTagPropertyToTerraform(struct?: CcKey.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccKeyTagPropertyToHclTerraform(struct?: CcKey.TagProperty | cdktn.IResolvable): any {
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


export namespace CcKey {
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that's 1 to 128 Unicode characters in length and can't be prefixed with ``aws:``. digits, whitespace, ``_``, ``.``, ``:``, ``/``, ``=``, ``+``, ``@``, ``-``, and ``"``.
    *  For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/kms_key#key CcKey#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that's 1 to 256 characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, ``_``, ``.``, ``/``, ``=``, ``+``, and ``-``.
    *  For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/kms_key#value CcKey#value}
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
